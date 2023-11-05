package com.flickmatch.platform.graphql.type;

import com.flickmatch.platform.dynamodb.model.SportsVenues;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
public class StripePaymentLink{
    Double amount;
    String url;
}
