package com.flickmatch.platform.records;

import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;
import java.util.List;

@Log4j2
//TODO: Using this for development, Create a type instead of record when DB is integrated
public record SportsVenue(String sportsVenueId,
                          String name,
                          String googleMapsLink,
                          String coordinates,
                          int contactNumber,
                          List<String> availableSports) {

    private static List<SportsVenue> venues = new ArrayList<>();

    public static void addSportsVenue(SportsVenue venue) {
        log.info(venue.toString());
        venues.add(venue);
    }

    public static List<SportsVenue> getSportsVenues() {
        return venues;
    }
}
