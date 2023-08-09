package com.flickmatch.webhook.graphql.input;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
public class PlayerInput {
    String name;
    String waNumber;
}
