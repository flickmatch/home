package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConverted;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
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
    private String date;
    private String location;
    private String gameNumber;
    private String email;
    private String paymentId;
    private String phoneNumber;
    private String redirectUrl;
    private String pinCode;

    @DynamoDBAttribute(attributeName="pinCode")
    public String getPinCode() {
        return pinCode;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

    @DynamoDBAttribute(attributeName="redirectUrl")
    public String getRedirectUrl() {
        return redirectUrl;
    }

    public void setRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
    }

    @DynamoDBAttribute(attributeName="paymentId")
    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

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

    // Getter and Setter for phoneNumber
    @DynamoDBAttribute(attributeName="phoneNumber")
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @DynamoDBAttribute(attributeName="date")
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @DynamoDBAttribute(attributeName="location")
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @DynamoDBAttribute(attributeName="gameNumber")
    public String getGameNumber() {
        return gameNumber;
    }

    public void setGameNumber(String gameNumber) {
        this.gameNumber = gameNumber;
    }
    @DynamoDBAttribute(attributeName="email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
