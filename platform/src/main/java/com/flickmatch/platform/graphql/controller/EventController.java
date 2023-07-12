package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.input.CreateEventInput;
import com.flickmatch.platform.graphql.input.JoinEventInput;
import com.flickmatch.platform.graphql.type.City;
import com.flickmatch.platform.graphql.type.Event;
import com.flickmatch.platform.graphql.type.MutationResult;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import java.util.List;


@Controller
@Log4j2
public class EventController {

    @Autowired
    EventBuilder eventBuilder;

    @MutationMapping
    public MutationResult createEvent(@Argument CreateEventInput input) {
        try {
            eventBuilder.createEvent(input, true);
        } catch (Exception exception) {
            log.error(exception.getMessage());
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage(exception.getMessage())
                    .build();
        }
        return MutationResult.builder()
                .isSuccessful(true)
                .build();
    }

    @MutationMapping
    public MutationResult joinEvent(@Argument JoinEventInput input) {
        try {
            eventBuilder.joinEvent(input);
        } catch (Exception exception) {
            log.error(exception.getMessage());
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage(exception.getMessage())
                    .build();
        }
        return MutationResult.builder()
                .isSuccessful(true)
                .build();
    }

    @SchemaMapping(typeName = "City", field = "events")
    public List<Event> getEvents(City city) {
        return eventBuilder.getEvents(city.getCityId());
    }

    @SchemaMapping(typeName = "City", field = "pastEvents")
    public List<Event> getPastEvents(City city, @Argument Integer inDays) {
        return eventBuilder.getPastEvents(city.getCityId(), inDays);
    }

}
