package com.flickmatch.platform.records;

import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.type.Player;
import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Log4j2
public record Event(String eventId,
                    String city,
                    String status,
                    String dateTime,
                    Double charges,
                    String moderatorId,
                    String sportsVenueId,
                    List<Player> players) {
    private static List<Event> events = new ArrayList<>();

    public static void addEvent(Event event) {
        events.add(event);
    }

    public static List<Event> getEvents(String city) {
        return events.stream()
                .filter(event -> event.city.equals(city))
                .collect(Collectors.toList());
    }

    public static void addPlayerInEvent(String eventId, PlayerInput playerInput) {
        Event selectedEvent = events.stream()
                .filter(event -> event.eventId.equals(eventId))
                .findFirst()
                .orElse(null);

        if (selectedEvent != null) {
            log.info(playerInput);
            selectedEvent.players.add(Player.builder()
                            .whatsAppNumber(playerInput.getWhatsAppNumber())
                            .lastName(playerInput.getLastName())
                            .firstName(playerInput.getFirstName())
                    .build());
        } else {
            throw new IllegalArgumentException("Can't find event");
        }
    }
}
