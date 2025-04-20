package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CreatePlayerStatsInput {
    String email;
    Integer wins;
}
