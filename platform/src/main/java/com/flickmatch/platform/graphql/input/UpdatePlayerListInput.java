package com.flickmatch.platform.graphql.input;

import com.flickmatch.platform.graphql.type.Player;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class UpdatePlayerListInput {
    private String date;
    private String startTime;
    private String cityId;
    private String venueName;
    private List<PlayerInput> reservedPlayersList;
    private List<PlayerInput> waitListPlayers;
}
