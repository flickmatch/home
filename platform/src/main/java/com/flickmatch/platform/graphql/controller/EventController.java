package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.input.CreateEventInput;
import com.flickmatch.platform.graphql.input.JoinEventInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import com.flickmatch.platform.graphql.type.Player;
import com.flickmatch.platform.records.Event;
import lombok.extern.log4j.Log4j2;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@Log4j2
public class EventController {
    //Hack to set Id until DB in integrated
    private static int id = 1;

    @MutationMapping
    public MutationResult createEvent(@Argument CreateEventInput input) {
        try {
            List<Player> players = input.getPlayers()
                    .stream()
                    .map(playerInput -> {
                        return Player.builder()
                                .firstName(playerInput.getFirstName())
                                .lastName(playerInput.getLastName())
                                .whatsAppNumber(playerInput.getWhatsAppNumber())
                                .build();
                    })
                    .collect(Collectors.toList());
            Event event = new Event(Integer.toString(id), input.getCity(), input.getStatus(), input.getDateTime(), input.getCharges(),
                    input.getModeratorId(), input.getSportsVenueId(), players);
            Event.addEvent(event);
            id++;
        } catch (Exception exception) {
            log.error(exception.getMessage());
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage("Sample message")
                    .build();
        }
        return MutationResult.builder()
                .isSuccessful(true)
                .build();
    }

    @MutationMapping
    public MutationResult joinEvent(@Argument JoinEventInput input) {
        try {
            Event.addPlayerInEvent(input.getEventId(), input.getPlayer());
        } catch (Exception exception) {
            log.error(exception.getMessage());
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage("Sample message")
                    .build();
        }
        return MutationResult.builder()
                .isSuccessful(true)
                .build();
    }

    @QueryMapping(name = "events")
    public List<Event> getEvents(@Argument String city) {
        return Event.getEvents(city);
    }
}
