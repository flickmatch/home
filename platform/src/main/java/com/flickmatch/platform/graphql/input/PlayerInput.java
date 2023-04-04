package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class PlayerInput {
    String name;
    int waNumber;
}
