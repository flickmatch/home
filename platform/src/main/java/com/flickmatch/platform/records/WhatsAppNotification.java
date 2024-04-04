package com.flickmatch.platform.records;

import java.util.Date;
import java.util.List;

public record WhatsAppNotification(Date startTime, Date endTime, String venueName, Integer reservedPlayersCount, Double charges, String venueLocationLink,
                                   String localTimeZone, List<String> playerNameList,String uniqueEventId,String currency) {
}
