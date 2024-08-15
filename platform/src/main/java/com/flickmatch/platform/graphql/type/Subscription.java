package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class Subscription {
    private String subscriptionId;
    private String passId;
    private String userId;
    private String expiryDate;
    private Integer gamesLeft;
    private String status;

}
