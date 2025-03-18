package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UpdateEventScoreInput {
    String uniqueEventId;
    Integer team1Score;
    Integer team2Score;
}
