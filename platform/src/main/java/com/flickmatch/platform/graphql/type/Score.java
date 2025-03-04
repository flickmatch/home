package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Score {
    private String scoreId;
    private Integer teamA;
    private Integer teamB;
}
