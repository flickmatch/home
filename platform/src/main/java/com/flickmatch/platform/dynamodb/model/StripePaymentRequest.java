package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConverted;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@DynamoDBTable(tableName="StripePaymentRequest")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@Getter
@Setter
public class StripePaymentRequest {

    private String uniqueEventId;
    private List<Event.PlayerDetails> playerDetailsList;
    private String status;
    private String date;
    private String location;
    private String gameNumber;
    private String email;
    private String paymentId;
    private String phoneNumber;
    private String redirectUrl;
    private String pinCode;
    private String sessionId;
    private String sessionUrl;




    @DynamoDBHashKey(attributeName="sessionId")
    public String getSessionId() {
        return sessionId;
    }



}
