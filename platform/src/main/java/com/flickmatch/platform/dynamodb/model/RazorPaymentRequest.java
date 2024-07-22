package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import lombok.*;

import java.util.List;

@DynamoDBTable(tableName="RazorPaymentRequest")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RazorPaymentRequest {
    private String orderId;
    private String uniqueEventId;
    private List<Event.PlayerDetails> playerDetailsList;
    private String status;


}
