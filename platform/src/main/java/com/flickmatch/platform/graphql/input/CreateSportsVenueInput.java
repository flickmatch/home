package com.flickmatch.platform.graphql.input;

import com.flickmatch.platform.dynamodb.model.SportsVenues;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CreateSportsVenueInput {
    String cityId;
    String displayName;
    String googleMapsLink;
    SportsVenues.StripePaymentLinkInput stripePaymentLinkInput;
}
