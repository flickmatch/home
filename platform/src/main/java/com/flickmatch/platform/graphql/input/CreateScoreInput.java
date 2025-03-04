package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CreateScoreInput {
    private Integer teamA;
    private Integer teamB;
}
