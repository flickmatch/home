package com.flickmatch.platform.graphql.input;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class CreateSportsVenueInput {
    String cityId;
    String displayName;
    String googleMapsLink;
    List<StripePaymentLinkInput> stripePaymentLinks;
}
