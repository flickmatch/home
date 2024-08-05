package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CreateSubscriptionInput {
    String email;
    String passId;
}
