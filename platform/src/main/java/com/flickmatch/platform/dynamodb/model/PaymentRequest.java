package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.List;

@DynamoDBTable(tableName="PaymentRequest")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentRequest {

    private String merchantTransactionId;
    private String uniqueEventId;
    private List<Event.PlayerDetails> playerDetailsList;
    /*
        status values can be INITIATED, PAID, FAILED
         */
    private String status;

    @DynamoDBHashKey(attributeName="merchantTransactionId")
    public String getMerchantTransactionId() {
        return merchantTransactionId;
    }

    public void setMerchantTransactionId(String merchantTransactionId) {
        this.merchantTransactionId = merchantTransactionId;
    }

    @DynamoDBAttribute(attributeName="uniqueEventId")
    public String getUniqueEventId() {
        return uniqueEventId;
    }

    public void setUniqueEventId(String uniqueEventId) {
        this.uniqueEventId = uniqueEventId;
    }

    @DynamoDBAttribute(attributeName="playerDetailsList")
    public List<Event.PlayerDetails> getPlayerDetailsList() {
        return playerDetailsList;
    }

    public void setPlayerDetailsList(List<Event.PlayerDetails> playerDetailsList) {
        this.playerDetailsList = playerDetailsList;
    }

    @DynamoDBAttribute(attributeName="status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
