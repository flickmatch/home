package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.input.CreateSportsVenueInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import com.flickmatch.platform.records.SportsVenue;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class SportsVenueController {

    //Hack to set Id until DB in integrated
    private static int id = 1;

    @MutationMapping
    public MutationResult createSportsVenue(@Argument CreateSportsVenueInput input) {
        try {
            SportsVenue sportsVenue = new SportsVenue(Integer.toString(id),
                    input.getName(),
                    input.getGoogleMapsLink(),
                    input.getCoordinates(),
                    input.getContactNumber(),
                    input.getAvailableSports());
            SportsVenue.addSportsVenue(sportsVenue);
            id++;
        } catch (Exception exception) {
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage("Sample error")
                    .build();
        }

        return MutationResult.builder()
                .isSuccessful(true)
                .build();
    }

    @QueryMapping(name = "sportsVenues")
    public List<SportsVenue> getSportsVenues() {
        return SportsVenue.getSportsVenues();
    }
}
