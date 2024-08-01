package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class Pass {
    String passId;
    String cityId;
    String passType;
    Integer totalGames;
    Integer totalDays;
    String title;
    Integer price;
    String status;
}
