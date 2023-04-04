package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class City {

    String cityId;
    String cityName;
    List<Event> events;
    List<SportsVenue> sportsVenues;

}
