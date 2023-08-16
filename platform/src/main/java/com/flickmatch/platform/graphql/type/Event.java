package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import java.util.List;
import java.util.Date;

@Builder
public class Event {
    private Date startTime;
    private Date endTime;
    private String eventId;
    //TODO: Remove displayTitle and logic from mapEventToGQLType,
    // after WA client start using individual fields
    private String displayTitle;
    private String date;
    private String time;
    private String venueName;
    private String venueLocationLink;
    private Integer reservedPlayersCount;
    private Integer waitListPlayersCount;
    private Double charges;
    private List<Player> reservedPlayersList;
    private List<Player> waitListPlayers;
    private String stripePaymentUrl;
}
