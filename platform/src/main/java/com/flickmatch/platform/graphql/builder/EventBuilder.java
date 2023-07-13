package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.graphql.input.CreateEventInput;
import com.flickmatch.platform.graphql.input.JoinEventInput;
import com.flickmatch.platform.graphql.type.Player;
import com.flickmatch.platform.graphql.type.SportsVenue;
import com.flickmatch.platform.graphql.util.DateUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@Log4j2
public class EventBuilder {

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
        //TODO: Remove hardcoded value once whatsApp is not used for joining event
        String date = "2023-" + input.getEventId().substring(0, 5);
        int index = Integer.parseInt(input.getEventId().substring(6));
        log.info(date);
        log.info(index);
        Optional<Event> eventsInCity =
                eventRepository.findById(new Event.EventId(input.getCityId(),date));
        if (eventsInCity.isPresent()) {
            Optional<Event.EventDetails> selectedEvent = eventsInCity.get().getEventDetailsList()
                    .stream().filter(eventDetails -> eventDetails.getIndex().equals(index)).findFirst();
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

    public List<com.flickmatch.platform.graphql.type.Event> getEvents(String cityId) {
        Date currentTime = new Date(System.currentTimeMillis());
        Date tomorrow = Date.from(currentTime.toInstant().plus(1, ChronoUnit.DAYS));
        String currentDate = DateUtil.extractDateFromISOFormatDate(currentTime);
        String tomorrowDate = DateUtil.extractDateFromISOFormatDate(tomorrow);
        Optional<Event> eventData = eventRepository.findById(new Event.EventId(cityId,currentDate));
        List<com.flickmatch.platform.graphql.type.Event> eventList = new ArrayList<>();
        if (eventData.isPresent()) {
            //filter events before current time
            List<com.flickmatch.platform.graphql.type.Event> todayEventList =
                    eventData.get().getEventDetailsList().stream()
                    .filter(eventDetails -> eventDetails.getStartTime().after(currentTime)).map(eventDetails -> mapEventToGQLType(eventDetails, currentDate)).toList();
            eventList.addAll(todayEventList);
        }
        eventData = eventRepository.findById(new Event.EventId(cityId,tomorrowDate));
        if (eventData.isPresent()) {
            List<com.flickmatch.platform.graphql.type.Event> upcomingEventList =
                    eventData.get().getEventDetailsList().stream()
                    .map(eventDetails -> mapEventToGQLType(eventDetails, tomorrowDate)).toList();
            eventList.addAll(upcomingEventList);
        }

        return eventList;
    }

    public List<com.flickmatch.platform.graphql.type.Event> getPastEvents(String cityId, Integer inDays) {
        List<com.flickmatch.platform.graphql.type.Event> pastEventList = new ArrayList<>();
        Date currentTime = new Date(System.currentTimeMillis());
        Date dateBeforeThirtyDays = Date.from(currentTime.toInstant().minus(30, ChronoUnit.DAYS));

        eventRepository.findAll().forEach(event -> {
            if (event.getCityId().equals(cityId)) {
                List<com.flickmatch.platform.graphql.type.Event> pastEventsInCity =
                        event.getEventDetailsList().stream()
                        .filter(eventDetails ->
                        eventDetails.getStartTime().before(currentTime) &&
                                eventDetails.getStartTime().after(dateBeforeThirtyDays)
                ).map(eventDetails ->
                        mapEventToGQLType(eventDetails, event.getDate())
                ).toList();
                pastEventList.addAll(pastEventsInCity);
            }
        });

        return pastEventList;
    }

    private Event.EventDetails buildEventDetails(CreateEventInput input, int index) throws ParseException {
        List<SportsVenue> sportsVenueList = sportsVenueBuilder.getSportsVenues(input.getCityId());
        Optional<SportsVenue> sportsVenue = sportsVenueList.stream()
                .filter(entity -> entity.getSportsVenueId().equals(input.getSportsVenueId())).findFirst();
        if (sportsVenue.isEmpty()) {
            throw new IllegalArgumentException("Incorrect sports venue");
        }
        Event.EventDetails eventDetails =  Event.EventDetails.builder()
                .index(index)
                .startTime(DateUtil.parseDateFromString(input.getStartTime()))
                .endTime(DateUtil.parseDateFromString(input.getEndTime()))
                .charges(input.getCharges())
                .reservedPlayersCount(input.getReservedPlayersCount())
                .waitListPlayersCount(input.getWaitListPlayersCount())
                .sportName("Football")
                .venueName(sportsVenue.get().getDisplayName())
                .venueLocationLink(sportsVenue.get().getGoogleMapsLink())
                .playerDetailsList(new ArrayList<>())
                .build();
        return eventDetails;
    }

    private com.flickmatch.platform.graphql.type.Event mapEventToGQLType(Event.EventDetails eventDetails, String date) {
        //TODO: Use full date once whatsApp is not used for joining event
        String displayId = date.substring(5) + "-" +eventDetails.getIndex();
        int players = eventDetails.getReservedPlayersCount() / 2;
        //log.info(eventDetails.getReservedPlayersCount());
        String eventType = players + "v" + players;
        String title = eventType + " "
                + formatDateTimeForTitle(eventDetails.getStartTime(), eventDetails.getEndTime())
                + " "
                + eventDetails.getVenueName();
        List<Player> reservedPlayers = new ArrayList<>();
        List<Player> waitListPlayers = new ArrayList<>();
        createPlayerQueue(eventDetails, reservedPlayers, waitListPlayers);
        return com.flickmatch.platform.graphql.type.Event.builder()
                .displayId(displayId)
                .displayTitle(title)
                .date(getFormattedEventDate(eventDetails.getStartTime()))
                .time(getFormattedEventTime(eventDetails.getStartTime(), eventDetails.getEndTime()))
                .venueName(eventDetails.getVenueName())
                .charges(eventDetails.getCharges())
                .venueLocationLink(eventDetails.getVenueLocationLink())
                .reservedPlayersList(reservedPlayers)
                .reservedPlayersCount(eventDetails.getReservedPlayersCount())
                .waitListPlayers(waitListPlayers)
                .waitListPlayersCount(eventDetails.getWaitListPlayersCount())
                .build();
    }

    private String formatDateTimeForTitle(Date startTime, Date endTime) {
        return getFormattedEventDate(startTime) + " "
                + getFormattedEventTime(startTime, endTime);
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

    private String getFormattedEventDate(Date startTime) {
        SimpleDateFormat dateFormatter = new SimpleDateFormat("EEE, MMM d");
        dateFormatter.setTimeZone(TimeZone.getTimeZone("GMT+5:30"));
        return dateFormatter.format(startTime);
    }

    private String getFormattedEventTime(Date startTime, Date endTime) {
        SimpleDateFormat timeFormatter = new SimpleDateFormat("h:mma");
        timeFormatter.setTimeZone(TimeZone.getTimeZone("GMT+5:30"));
        return timeFormatter.format(startTime) + "-"
                + timeFormatter.format(endTime);
    }

    private void isStartTimeInPast(Date startTime) {
        Date currentTime = new Date(System.currentTimeMillis());
        if (currentTime.after(startTime)) {
            throw new IllegalArgumentException("Selected past event/Time");
        }
    }

    

}
