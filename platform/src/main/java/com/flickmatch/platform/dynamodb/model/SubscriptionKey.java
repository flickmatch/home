package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import lombok.*;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionKey {
    
    @DynamoDBHashKey
    private String userId;

    @DynamoDBRangeKey
    private String subscriptionId;

}
