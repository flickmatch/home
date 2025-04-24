package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Optional;

@Builder
@Getter
public class UpdateEventDetailsInput {
    String uniqueEventId;
    @Builder.Default Optional<Date> startTime = Optional.empty();
    @Builder.Default Optional<Date> endTime = Optional.empty();
    @Builder.Default Optional<Double> charges = Optional.empty();
    @Builder.Default Optional<String> sportsVenueId = Optional.empty();
    @Builder.Default Optional<Integer> reservedPlayersCount = Optional.empty();
    @Builder.Default Optional<Integer> waitListPlayersCount = Optional.empty();
    @Builder.Default Optional<Double> credits = Optional.empty();
    @Builder.Default Optional<Boolean> testGame = Optional.empty();
    @Builder.Default Optional<Boolean> teamDivision = Optional.empty();
    @Builder.Default Optional<String> team1Color = Optional.empty();
    @Builder.Default Optional<String> team2Color = Optional.empty();
    @Builder.Default Optional<Boolean> isDeleted = Optional.empty();
}
