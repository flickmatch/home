package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.util.DateUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Log4j2
@Service
public class PlayerBuilder {

    public PlayerBuilder(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    EventRepository eventRepository;

    public void updatePlayerList(UpdatePlayerListInput input) {
        validateInputs(input);
        Optional<Event> eventsInCity = eventRepository.findById(new Event.EventId(input.getCityId(),input.getDate()));
        if (eventsInCity.isPresent()) {
            List<Event.EventDetails> eventsInSelectedVenue = eventsInCity.get().getEventDetailsList().stream()
                    .filter(eventDetails -> {
                return eventDetails.getVenueName().equals(input.getVenueName());
            }).toList();
            if (!eventsInSelectedVenue.isEmpty()) {
                Optional<Event.EventDetails> selectedEvent = eventsInSelectedVenue.stream()
                        .filter(eventDetails ->
                        input.getStartTime().equals(getFormattedEventTime(eventDetails.getStartTime())))
                        .findFirst();
                selectedEvent.ifPresent(eventDetails -> eventDetails.setPlayerDetailsList(
                        buildPlayerList(input.getReservedPlayersList(), input.getWaitListPlayers())));
                eventRepository.save(eventsInCity.get());
                return;
            }
        }
        throw new IllegalArgumentException("Invalid Event selected");
    }

    private List<Event.PlayerDetails> buildPlayerList(List<PlayerInput> reservedPlayersList,
                                                      List<PlayerInput> waitListPlayers) {
        if (CollectionUtils.isEmpty(reservedPlayersList) && CollectionUtils.isEmpty(waitListPlayers)) {
            throw new IllegalArgumentException("Invalid player list");
        }
        List<Event.PlayerDetails> playerDetailsList = new ArrayList<>();
        reservedPlayersList.forEach(reservedPlayer -> {
            Event.PlayerDetails playerDetails = new Event.PlayerDetails();
            playerDetails.setName(reservedPlayer.getName());
            playerDetailsList.add(playerDetails);
        });
        waitListPlayers.forEach(waitListPlayer -> {
            Event.PlayerDetails playerDetails = new Event.PlayerDetails();
            playerDetails.setName(waitListPlayer.getName());
            playerDetailsList.add(playerDetails);
        });
        return playerDetailsList;
    }

    private void validateInputs(UpdatePlayerListInput input) {
        try {
            DateUtil.parseDateFromInput(input.getDate());
            DateUtil.parseTimeFromInput(input.getStartTime());
        } catch (ParseException e) {
            throw new IllegalArgumentException("Date or time is invalid, Please check format");
        }
    }

    private String getFormattedEventTime(Date startTime) {
        SimpleDateFormat timeFormatter = new SimpleDateFormat("h:mma");
        timeFormatter.setTimeZone(TimeZone.getTimeZone("GMT+5:30"));
        return timeFormatter.format(startTime);
    }
}
