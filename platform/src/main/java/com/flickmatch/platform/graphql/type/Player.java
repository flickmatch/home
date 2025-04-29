package com.flickmatch.platform.graphql.type;

import lombok.Builder;

@Builder
public class Player {
    String displayName;
    String teamColor;
    Integer matchesPlayed;
    Integer wins;
    String gameLinks;
}
