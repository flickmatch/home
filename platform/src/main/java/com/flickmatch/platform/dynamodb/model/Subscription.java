package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import lombok.*;

@DynamoDBTable(tableName = "Subscription")
@ToString
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Subscription {

    private String subscriptionId;
    public static enum Status {
        valid,
        expired;
    }
    private Status status;
    private String subscriptionDetailsId;
    private String createdDate;
    private String lastUpdatedDate;

}
