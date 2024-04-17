package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@DynamoDBTable(tableName="RazorPaymentRequest")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RazorPaymentRequest {
    private String orderId;
    private String uniqueEventId;
    private List<Event.PlayerDetails> playerDetailsList;
    private String status;

    @DynamoDBHashKey(attributeName="orderId")
    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
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
