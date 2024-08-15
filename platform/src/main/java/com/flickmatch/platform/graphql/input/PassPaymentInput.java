package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PassPaymentInput {
    private String passId;
    private String email;
    private String currency;
    private String location;
}
