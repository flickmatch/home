package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class CreateEventInput {
    String cityId;
    String startTime;
    String endTime;
    Double charges;
    String sportsVenueId;
    Integer reservedPlayersCount;
    Integer waitListPlayersCount;
    Double credits;
    Boolean testGame;
    Boolean teamDivision;
    String team1Color;
    String team2Color;
    List<String> paymentMethods;
}
