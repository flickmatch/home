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

    public void createEvent(CreateEventInput input) throws ParseException {
        String date = DateUtil.extractDateFromISOFormatString(input.getStartTime());
        Optional<Event> eventsInCity =
                eventRepository.findById(new Event.EventId(input.getCityId(),date));
        if (eventsInCity.isPresent()) {
            List<Event.EventDetails> eventDetailsList = eventsInCity.get().getEventDetailsList();
            eventDetailsList.add(buildEventDetails(input, eventDetailsList.size()+1));
            eventRepository.save(eventsInCity.get());
        } else {
            Event newEvent = new Event();
            newEvent.setCityId(input.getCityId());
            newEvent.setDate(date);
            newEvent.setEventDetailsList(List.of(buildEventDetails(input, 1)));
            eventRepository.save(newEvent);
        }
    }

    public void joinEvent(JoinEventInput input) {
        String date = "2023-" + input.getEventId().substring(0, 5);
        int index = Integer.valueOf(input.getEventId().substring(6));
        log.info(date);
        log.info(index);
        Optional<Event> eventsInCity =
                eventRepository.findById(new Event.EventId(input.getCityId(),date));
        if (eventsInCity.isPresent()) {
            Optional<Event.EventDetails> selectedEvent = eventsInCity.get().getEventDetailsList()
                    .stream().filter(eventDetails -> eventDetails.getIndex().equals(index)).findFirst();
            if (selectedEvent.isPresent()) {
                //TODO: Add check to disallow eventId from past
                Date currentTime = new Date(System.currentTimeMillis());
                if (currentTime.after(selectedEvent.get().getStartTime())) {
                    throw new IllegalArgumentException("Invalid Event selected");
                }

                Event.PlayerDetails playerDetails = new Event.PlayerDetails();
                playerDetails.setName(input.getPlayer().getName());
                playerDetails.setWaNumber(input.getPlayer().getWaNumber());
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
                    .filter(eventDetails -> {
                        return eventDetails.getStartTime().after(currentTime);
                    }).map(eventDetails -> mapEventToGQLType(eventDetails, currentDate)).toList();
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

    private Event.EventDetails buildEventDetails(CreateEventInput input, int index) throws ParseException {
        List<SportsVenue> sportsVenueList = sportsVenueBuilder.getSportsVenues(input.getCityId());
        Optional<SportsVenue> sportsVenue = sportsVenueList.stream()
                .filter(entity -> entity.getSportsVenueId().equals(input.getSportsVenueId())).findFirst();
        if (!sportsVenue.isPresent()) {
            throw new IllegalArgumentException("Incorrect sports venue");
        }
        Event.EventDetails eventDetails = new Event.EventDetails();
        eventDetails.setIndex(index);
        eventDetails.setStartTime(DateUtil.parseDateFromString(input.getStartTime()));
        eventDetails.setEndTime(DateUtil.parseDateFromString(input.getEndTime()));
        eventDetails.setCharges(input.getCharges());
        eventDetails.setReservedPlayersCount(input.getReservedPlayersCount());
        eventDetails.setWaitListPlayersCount(input.getWaitListPlayersCount());
        eventDetails.setSportName("Football");
        eventDetails.setVenueName(sportsVenue.get().getDisplayName());
        eventDetails.setVenueLocationLink(sportsVenue.get().getGoogleMapsLink());
        eventDetails.setPlayerDetailsList(new ArrayList<>());
        return eventDetails;
    }

    private com.flickmatch.platform.graphql.type.Event mapEventToGQLType(Event.EventDetails eventDetails, String date) {
        String displayId = date.substring(5) + "-" +eventDetails.getIndex();
        int players = eventDetails.getReservedPlayersCount() / 2;
        log.info(eventDetails.getReservedPlayersCount());
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
                .charges(eventDetails.getCharges())
                .venueLocationLink(eventDetails.getVenueLocationLink())
                .reservedPlayersList(reservedPlayers)
                .build();
    }

    private String formatDateTimeForTitle(Date startTime, Date endTime) {
        SimpleDateFormat timeFormatter = new SimpleDateFormat("h:mma");
        timeFormatter.setTimeZone(TimeZone.getTimeZone("GMT+5:30"));
        SimpleDateFormat dateFormatter = new SimpleDateFormat("EEE, MMM d");
        dateFormatter.setTimeZone(TimeZone.getTimeZone("GMT+5:30"));
        return dateFormatter.format(startTime) + " "
                + timeFormatter.format(startTime) + "-"
                + timeFormatter.format(endTime);
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

    

}
