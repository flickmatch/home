package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class InitiatePaymentInput {
    String eventId;
    String cityId;
    PlayerInput player;
}
