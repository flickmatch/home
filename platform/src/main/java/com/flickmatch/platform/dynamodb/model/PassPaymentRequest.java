package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConvertedEnum;
import lombok.*;

@DynamoDBTable(tableName = "PassPaymentRequest")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PassPaymentRequest {

    public static enum Status {
        Active, Expired
    }
    @DynamoDBHashKey(attributeName="orderId")
    private String orderId;
    private String location;

    @DynamoDBTypeConvertedEnum
    private Status status;

    private Double amount;
    private String userId;
    private String passId;
}
