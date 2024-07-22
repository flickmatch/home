package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import lombok.*;


@DynamoDBTable(tableName = "LoyaltyPass")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoyaltyPass {
    private String passId;
    private Integer price;
    private String location;

    public static enum PassType {
        DAY_PASS,
        GAME_PASS;
    }

    private PassType passType;
    private Integer numberOfGames;
    private Integer validityPeriodInDays;
    private Long createdDate;
    private Long lastUpdatedDate;
}

