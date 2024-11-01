package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class Subscription {
    private String status;
    private String subscriptionId;
    private String passId;
    private String userId;
    private Double creditsLeft;
    private String cityId;
    private String expiryDate;
    private String title;
    private String description;
}
