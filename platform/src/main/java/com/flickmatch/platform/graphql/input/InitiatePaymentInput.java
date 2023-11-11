package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class InitiatePaymentInput {
    String uniqueEventId;
    List<PlayerInput> playerInputList;
}
