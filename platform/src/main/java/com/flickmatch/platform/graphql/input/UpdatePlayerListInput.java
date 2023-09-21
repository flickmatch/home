package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Builder
@Getter
@ToString
public class UpdatePlayerListInput {
    private String date;
    private String startTime;
    private String venueName;
    private String endTime;
    private String charges;
    private String format;
    private List<PlayerInput> reservedPlayersList;
    private List<PlayerInput> waitListPlayers;
}
