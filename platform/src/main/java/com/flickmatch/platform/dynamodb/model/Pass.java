package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import com.flickmatch.platform.dynamodb.model.Event.EventId;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;


@DynamoDBTable(tableName = "Pass")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Pass {

    @DynamoDBHashKey(attributeName = "cityId")
    public String getCityId() {
        return this.passKey != null ? this.passKey.getCityId() : null;
    }

    public void setCityId(String cityId) {
        if (this.passKey == null) {
            this.passKey = new PassKey();
        }
        this.passKey.setCityId(cityId);
    }

    @DynamoDBRangeKey(attributeName = "passId")
    @DynamoDBAutoGeneratedKey
    public String getPassId() {
        return this.passKey != null ? this.passKey.getPassId() : null;
    }

    public void setPassId(String passId) {
        if (this.passKey == null) {
            this.passKey = new PassKey();
        }
        this.passKey.setPassId(passId);
    }

    private String passType;

    private Double totalGames;

//    private Integer payForGames;

    private Integer totalDays;

    private String title;

    private Double price;

    private String status;
    private List<String> features;
    private String description;


    public List<String> getFeatures() {
        return features;
    }

    public void setFeatures(List<String> features) {
        this.features = features;
    }

    public String getPassType() {
        return passType;
    }

    public void setPassType(String passType) {
        this.passType = passType;
    }

    public Double getTotalGames() {
        return totalGames;
    }

    public void setTotalGames(Double totalGames) {
        this.totalGames = totalGames;
    }

    public String getDescription() {
        return passType;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public Integer getTotalDays() {
        return totalDays;
    }

    public void setTotalDays(Integer totalDays) {
        this.totalDays = totalDays;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // This is a composite key made up of cityId and passId
    @Id
    private PassKey passKey;

    @Builder
    public static class PassKey {

        private String cityId;
        private String passId;

        PassKey() {
        }

        PassKey(String passId, String cityId) {
            this.passId = passId;
            this.cityId = cityId;
        }

        @DynamoDBHashKey(attributeName = "cityId")
        public String getCityId() {
            return cityId;
        }

        public void setCityId(String cityId) {
            this.cityId = cityId;
        }

        @DynamoDBRangeKey(attributeName = "passId")
        @DynamoDBAutoGeneratedKey
        public String getPassId() {
            return passId;
        }

        public void setPassId(String passId) {
            this.passId = passId;
        }
    }

}
