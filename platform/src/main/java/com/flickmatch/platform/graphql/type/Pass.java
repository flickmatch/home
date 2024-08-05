package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class Pass {

    public static enum PassType {
        LimitedGames,
        LimitedDays
    }
    public static enum Status {
        Active,
        Expired
    }

    String passId;
    String cityId;
    PassType passType;
    Integer totalGames;
    Integer totalDays;
    String title;
    Double price;
    Status status;
}
