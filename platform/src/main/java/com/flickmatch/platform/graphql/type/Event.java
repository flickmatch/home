package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.Date;

@Builder
@Getter
public class Event {
    private String currency;
    private Date startTime;
    private Date endTime;
    private String eventId;
    private String uniqueEventId;
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
    private Double credits;
    private Boolean testGame;
    private Boolean teamDivision;
    private String team1Color;
    private String team2Color;
    private String venuePinCode;
    private List<String> paymentMethods;
    private Integer team1Score;
    private Integer team2Score;
    private String team1Name;
    private String team2Name;
}
