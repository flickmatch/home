package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UpdateSubscriptionInput {
    private String status;
    private String subscriptionId;
    private String passId;
    private String userId;
    private Integer gamesLeft;
    private String expiryDate;
}
