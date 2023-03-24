package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class CreateEventInput {
    String city;
    String status;
    String dateTime;
    Double charges;
    String moderatorId;
    String sportsVenueId;
    List<PlayerInput> players;
}
