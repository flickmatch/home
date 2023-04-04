package com.flickmatch.platform.graphql.type;

import lombok.Builder;

import java.util.List;

@Builder
public class Event {
    private String displayId;
    private String displayTitle;
    private String venueLocationLink;
    private Double charges;
    private List<Player> reservedPlayersList;
}
