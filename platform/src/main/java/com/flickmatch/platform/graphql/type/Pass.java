package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class Pass {
    private String passId;
    private String cityId;
    private String passType;
    private Double totalGames;
    private Integer totalDays;
    private String title;
    private Double price;
    private String status;

}
