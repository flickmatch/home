package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.graphql.input.CreateEventInput;
import com.flickmatch.platform.graphql.input.JoinEventInput;
import com.flickmatch.platform.graphql.type.Player;
import com.flickmatch.platform.graphql.type.SportsVenue;
import com.flickmatch.platform.graphql.type.StripePaymentLink;
import com.flickmatch.platform.graphql.util.DateUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@Log4j2
public class EventBuilder {

    private static final String CLIENT_REFERENCE_ID = "?client_reference_id=";

    EventRepository eventRepository;

    @Autowired SportsVenueBuilder sportsVenueBuilder;

    public EventBuilder(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public Event createEvent(CreateEventInput input, boolean shouldValidateStartTime) throws ParseException {
        if (shouldValidateStartTime) {
            isStartTimeInPast(DateUtil.parseDateFromString(input.getStartTime()));
        }
        String date = DateUtil.extractDateFromISOFormatString(input.getStartTime());
        Optional<Event> eventsInCity =
                eventRepository.findById(new Event.EventId(input.getCityId(),date));
        if (eventsInCity.isPresent()) {
            List<Event.EventDetails> eventDetailsList = eventsInCity.get().getEventDetailsList();
            eventDetailsList.add(buildEventDetails(input, eventDetailsList.size()+1));
            return eventRepository.save(eventsInCity.get());
        } else {
            Event newEvent = new Event();
            newEvent.setCityId(input.getCityId());
            newEvent.setDate(date);
            newEvent.setEventDetailsList(List.of(buildEventDetails(input, 1)));
            return eventRepository.save(newEvent);
        }
    }

    public void joinEvent(JoinEventInput input) {
        int index = 0;
        //TODO: Remove hardcoded value once whatsApp is not used for joining event
        String date = input.getEventId();
        String[] parts = date.split("-");
        try{
             date =  parts[0] + "-" + parts[1] + "-" + parts[2];
             index = Integer.parseInt(parts[3]);
        }
        catch (NumberFormatException e)
        {
            System.out.println("Error: The given string cannot be converted to an integer.");
        }
        log.info(date);
        log.info(index);
        Optional<Event> eventsInCity =
                eventRepository.findById(new Event.EventId(input.getCityId(),date));
        if (eventsInCity.isPresent()) {
            final int finalIndex = index;
            Optional<Event.EventDetails> selectedEvent = eventsInCity.get().getEventDetailsList()
                    .stream().filter(eventDetails -> eventDetails.getIndex().equals(finalIndex)).findFirst();
            if (selectedEvent.isPresent()) {
                //check to disallow eventId from past
                isStartTimeInPast(selectedEvent.get().getStartTime());

                Event.PlayerDetails playerDetails = Event.PlayerDetails.builder()
                        .name(input.getPlayer().getName())
                        .waNumber(input.getPlayer().getWaNumber())
                        .build();

                if (selectedEvent.get().getPlayerDetailsList().size() ==
                selectedEvent.get().getReservedPlayersCount() + selectedEvent.get().getWaitListPlayersCount()) {
                    throw new IllegalStateException("We are full");
                }
                selectedEvent.get().getPlayerDetailsList().add(playerDetails);
                eventRepository.save(eventsInCity.get());
            } else {
                throw new IllegalArgumentException("Invalid Event selected");
            }
        } else {
            throw new IllegalArgumentException("Invalid Event selected");
        }

    }

    public List<com.flickmatch.platform.graphql.type.Event> getEvents(String cityId, String localTimeZone) {
        Date currentTime = new Date(System.currentTimeMillis());
        List<com.flickmatch.platform.graphql.type.Event> eventList = new ArrayList<>();
        final int GET_EVENT_DAYS = 7;
        for (int i = 0; i < GET_EVENT_DAYS; i++) {
            Date currentDate = Date.from(currentTime.toInstant().plus(i, ChronoUnit.DAYS));
            String formattedDate = DateUtil.extractDateFromISOFormatDate(currentDate, localTimeZone);
            Optional<Event> eventData = eventRepository.findById(new Event.EventId(cityId, formattedDate));
            if (eventData.isPresent()) {
                List<com.flickmatch.platform.graphql.type.Event> dailyEventList =
                        eventData.get().getEventDetailsList().stream()
                                .filter(eventDetails -> eventDetails.getStartTime().after(currentTime))
                                .map(eventDetails -> mapEventToGQLType(eventDetails, formattedDate, localTimeZone))
                                .toList();
                eventList.addAll(dailyEventList);
            }
        }
        return eventList;
    }

    public List<com.flickmatch.platform.graphql.type.Event> getPastEvents(String cityId, Integer inDays, String localTimeZone) {
        List<com.flickmatch.platform.graphql.type.Event> pastEventList = new ArrayList<>();
        Date currentTime = new Date(System.currentTimeMillis());
        // Calculate the date before inDays
        Date dateBeforeInDays = Date.from(currentTime.toInstant().minus(inDays, ChronoUnit.DAYS));
        eventRepository.findAll().forEach(event -> {
            if (event.getCityId().equals(cityId)) {
                List<com.flickmatch.platform.graphql.type.Event> pastEventsInCity =
                        event.getEventDetailsList().stream()
                                .filter(eventDetails ->
                                        eventDetails.getStartTime().before(currentTime) &&
                                                eventDetails.getStartTime().after(dateBeforeInDays)
                                ).map(eventDetails ->
                                        mapEventToGQLType(eventDetails, event.getDate(), localTimeZone)
                                ).toList();
                pastEventList.addAll(pastEventsInCity);
            }
        });
        return pastEventList;
    }

    private Event.EventDetails buildEventDetails(CreateEventInput input, int index) throws ParseException {
        List<SportsVenue> sportsVenueList = sportsVenueBuilder.getSportsVenues(input.getCityId());
        String currency = getCurrencyForCity(input.getCityId());
        Optional<SportsVenue> sportsVenue = sportsVenueList.stream()
                .filter(entity -> entity.getSportsVenueId().equals(input.getSportsVenueId())).findFirst();
        if (sportsVenue.isEmpty()) {
            throw new IllegalArgumentException("Incorrect sports venue");
        }
        Event.EventDetails eventDetails =  Event.EventDetails.builder()
                .index(index)
                .currency(currency)
                .startTime(DateUtil.parseDateFromString(input.getStartTime()))
                .endTime(DateUtil.parseDateFromString(input.getEndTime()))
                .charges(input.getCharges())
                .reservedPlayersCount(input.getReservedPlayersCount())
                .waitListPlayersCount(input.getWaitListPlayersCount())
                .sportName("Football")
                .venueName(sportsVenue.get().getDisplayName())
                .venueLocationLink(sportsVenue.get().getGoogleMapsLink())
                .playerDetailsList(new ArrayList<>())
                .stripePaymentUrl(getPaymentUrlForEvent(sportsVenue.get(), input.getCharges()))
                .build();
        return eventDetails;
    }
    public String getCurrencyForCity(String cityId) {
        final Map<String, String> cityToCurrencyMap = new HashMap<>();
            cityToCurrencyMap.put("1", "INR");
            cityToCurrencyMap.put("2", "INR");
            cityToCurrencyMap.put("3", "USD");
            cityToCurrencyMap.put("4", "USD");
            cityToCurrencyMap.put("5", "USD");
        return cityToCurrencyMap.getOrDefault(cityId, "IN");
    }

    private String getPaymentUrlForEvent(SportsVenue sportsVenue, Double amount) {
        Optional<StripePaymentLink> stripePaymentLinkForAmount = sportsVenue.getStripePaymentLinks().stream()
                .filter(stripePaymentLink -> stripePaymentLink.getAmount().equals(amount))
                .findFirst();
        if (stripePaymentLinkForAmount.isEmpty()) {
            //Todo: For now keeping it soft dependency, we need to throw exception in future
            log.error("Can't find stripe payment link in venue");
            return null;
        }
        return stripePaymentLinkForAmount.get().getUrl();
    }

    private com.flickmatch.platform.graphql.type.Event mapEventToGQLType(Event.EventDetails eventDetails, String date, String localTimeZone) {
        String eventId = date + "-" + eventDetails.getIndex();
        int players = eventDetails.getReservedPlayersCount() / 2;
        String eventType = players + "v" + players;
        //Todo: clean up this field from schema
        String title = "";
        List<Player> reservedPlayers = new ArrayList<>();
        List<Player> waitListPlayers = new ArrayList<>();
        createPlayerQueue(eventDetails, reservedPlayers, waitListPlayers);
        return com.flickmatch.platform.graphql.type.Event.builder()
                .startTime(eventDetails.getStartTime())
                .currency(eventDetails.getCurrency())
                .endTime(eventDetails.getEndTime())
                .eventId(eventId)
                .displayTitle(title)
                .date(getFormattedEventDate(eventDetails.getStartTime(), localTimeZone))
                .time(getFormattedEventTime(eventDetails.getStartTime(), eventDetails.getEndTime(), localTimeZone))
                .venueName(eventDetails.getVenueName())
                .charges(eventDetails.getCharges())
                .venueLocationLink(eventDetails.getVenueLocationLink())
                .reservedPlayersList(reservedPlayers)
                .reservedPlayersCount(eventDetails.getReservedPlayersCount())
                .waitListPlayers(waitListPlayers)
                .waitListPlayersCount(eventDetails.getWaitListPlayersCount())
                .stripePaymentUrl(eventDetails.getStripePaymentUrl() + CLIENT_REFERENCE_ID + eventId)
                .build();
    }

    private void createPlayerQueue(Event.EventDetails eventDetails,
                                   List<Player> reservedPlayers,
                                   List<Player> waitListPlayers) {
        AtomicInteger counter = new AtomicInteger();
        eventDetails.getPlayerDetailsList().forEach(playerDetails -> {
            Player player = Player.builder()
                    .displayName(playerDetails.getName())
                    .build();
            if (counter.get() < eventDetails.getReservedPlayersCount()) {
                reservedPlayers.add(player);
            } else {
                waitListPlayers.add(player);
            }
            counter.getAndIncrement();
        });
    }
    private String getFormattedEventDate(Date startTime, String localTimeZone) {
        SimpleDateFormat dateFormatter = new SimpleDateFormat("EEE, MMM d");
        dateFormatter.setTimeZone(TimeZone.getTimeZone(localTimeZone));
        return dateFormatter.format(startTime);
    }

    private String getFormattedEventTime(Date startTime, Date endTime, String localTimeZone) {
        SimpleDateFormat timeFormatter = new SimpleDateFormat("h:mma");
        TimeZone timeZone = TimeZone.getTimeZone(localTimeZone);
        timeFormatter.setTimeZone(timeZone);
        return timeFormatter.format(startTime) + "-"
                + timeFormatter.format(endTime) + " " + timeZone.getID();
    }
        private void isStartTimeInPast(Date startTime) {
        Date currentTime = new Date(System.currentTimeMillis());
        if (currentTime.after(startTime)) {
            throw new IllegalArgumentException("Selected past event/Time");
        }
    }
}
