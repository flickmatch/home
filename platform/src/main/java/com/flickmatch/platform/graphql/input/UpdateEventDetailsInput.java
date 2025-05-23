package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Builder
@Getter
public class UpdateEventDetailsInput {
    String uniqueEventId;

    @Builder.Default Optional<String> startTime = Optional.empty();
    @Builder.Default Optional<String> endTime = Optional.empty();
    @Builder.Default Optional<Double> charges = Optional.empty();
    @Builder.Default Optional<Integer> reservedPlayersCount = Optional.empty();
    @Builder.Default Optional<Integer> waitListPlayersCount = Optional.empty();
    @Builder.Default Optional<String> sportName = Optional.empty();
    @Builder.Default Optional<String> venueName = Optional.empty();
    @Builder.Default Optional<String> venueLocationLink = Optional.empty();
    @Builder.Default Optional<String> venuePinCode = Optional.empty();
    @Builder.Default Optional<String> stripePaymentUrl = Optional.empty();
    @Builder.Default Optional<Double> credits = Optional.empty();
    @Builder.Default Optional<Boolean> testGame = Optional.empty();
    @Builder.Default Optional<Boolean> teamDivision = Optional.empty();
    @Builder.Default Optional<String> team1Color = Optional.empty();
    @Builder.Default Optional<String> team2Color = Optional.empty();
    @Builder.Default Optional<List<String>> paymentMethods = Optional.empty();
    @Builder.Default Optional<Boolean> isDeleted = Optional.empty();
    @Builder.Default Optional<String> team1Name = Optional.empty();
    @Builder.Default Optional<String> team2Name = Optional.empty();
    @Builder.Default Optional<String> currency = Optional.empty();
    @Builder.Default Optional<Integer> team1Score = Optional.empty();
    @Builder.Default Optional<Integer> team2Score = Optional.empty();
}
