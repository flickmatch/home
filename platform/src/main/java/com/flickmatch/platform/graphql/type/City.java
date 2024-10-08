package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class City {

    String cityId;
    String cityName;
    String localTimeZone;
    String currency;
    String iconUrl;
    String countryCode;
    List<Event> events;
    List<SportsVenue> sportsVenues;

}