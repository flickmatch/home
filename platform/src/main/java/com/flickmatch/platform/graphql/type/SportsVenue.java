package com.flickmatch.platform.graphql.type;

import com.flickmatch.platform.dynamodb.model.SportsVenues;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class SportsVenue {
    private String displayName;
    private String googleMapsLink;
    private String sportsVenueId;
    private List<String> availableSportsIds;
    private SportsVenues.StripePaymentLinkInput stripePaymentLinkInput;
}
