package com.flickmatch.platform.graphql.type;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
public class StripePaymentLink {
    Double amount;
    String url;
}
