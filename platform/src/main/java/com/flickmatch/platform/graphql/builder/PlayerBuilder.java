package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.util.DateUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.text.SimpleDateFormat;
import java.time.format.DateTimeParseException;
import java.util.*;

@Log4j2
@Service
public class PlayerBuilder {

    public PlayerBuilder(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    EventRepository eventRepository;

    public void updatePlayerList(UpdatePlayerListInput input) {
        validateStartTime(input.getStartTime());
        String date = validateAndFormateDate(input.getDate());
        Optional<Event> eventsInCity = eventRepository.findById(new Event.EventId(input.getCityId(), date));
        if (eventsInCity.isPresent()) {
            List<Event.EventDetails> eventsInSelectedVenue = eventsInCity.get().getEventDetailsList().stream()
                    .filter(eventDetails -> compareVenueName(eventDetails.getVenueName(),input.getVenueName()))
                    .toList();
            if (!eventsInSelectedVenue.isEmpty()) {
                Optional<Event.EventDetails> selectedEvent = eventsInSelectedVenue.stream()
                        .filter(eventDetails ->
                        input.getStartTime().toLowerCase(Locale.ROOT)
                                .equals(getFormattedEventTime(eventDetails.getStartTime())))
                        .findFirst();

                selectedEvent.ifPresentOrElse(eventDetails -> eventDetails.setPlayerDetailsList(
                        buildPlayerList(input.getReservedPlayersList(), input.getWaitListPlayers())),
                        () -> {throw new IllegalArgumentException("Invalid Event selected");});
                eventRepository.save(eventsInCity.get());
                return;
            }
        }
        throw new IllegalArgumentException("Invalid Event selected");
    }

    private List<Event.PlayerDetails> buildPlayerList(List<PlayerInput> reservedPlayersList,
                                                      List<PlayerInput> waitListPlayers) {
        reservedPlayersList = reservedPlayersList.stream()
                .filter(playerInput -> !StringUtils.isEmpty(playerInput.getName())).toList();
        waitListPlayers = waitListPlayers.stream()
                .filter(playerInput -> !StringUtils.isEmpty(playerInput.getName())).toList();
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

    private String validateAndFormateDate(String date) {
        try {
            return DateUtil.getDateInInternationalFormat(date);
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("Date is invalid, Please check format");
        }
    }

    private void validateStartTime(String time) {
        try {
            SimpleDateFormat timeFormat = new SimpleDateFormat("hh:mm a");
            timeFormat.parse(time);
        } catch (Exception e) {
            throw new IllegalArgumentException("Time is invalid, Please check format");
        }

    }

    private String getFormattedEventTime(Date startTime) {
        SimpleDateFormat timeFormatter = new SimpleDateFormat("hh:mm a");
        timeFormatter.setTimeZone(TimeZone.getTimeZone("GMT+5:30"));
        System.out.println(timeFormatter.format(startTime));
        return timeFormatter.format(startTime);
    }

    private boolean compareVenueName(String venueName, String inputName) {
        return venueName.replace(" ", "").toLowerCase()
                .equals(inputName.replace(" ", "").toLowerCase());
    }
}
