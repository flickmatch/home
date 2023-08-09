package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class StripePaymentLink {
    Double amount;
    String url;
}
