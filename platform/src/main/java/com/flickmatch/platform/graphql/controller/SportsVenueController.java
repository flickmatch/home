package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.SportsVenueBuilder;
import com.flickmatch.platform.graphql.input.CreateSportsVenueInput;
import com.flickmatch.platform.graphql.type.City;
import com.flickmatch.platform.graphql.type.MutationResult;
import com.flickmatch.platform.graphql.type.SportsVenue;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@Log4j2
public class SportsVenueController {

    @Autowired
    SportsVenueBuilder sportsVenueBuilder;

    @MutationMapping
    public MutationResult createSportsVenue(@Argument CreateSportsVenueInput input) {
        try {
            sportsVenueBuilder.createSportsVenue(input);
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

    @SchemaMapping(typeName = "City", field = "sportsVenues")
    public List<SportsVenue> getSportsVenue(City city) {
        return sportsVenueBuilder.getSportsVenues(city.getCityId());
    }

}
