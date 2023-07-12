package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.SportsVenues;
import com.flickmatch.platform.dynamodb.repository.SportsVenueRepository;
import com.flickmatch.platform.graphql.input.CreateSportsVenueInput;
import com.flickmatch.platform.graphql.type.SportsVenue;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class SportsVenueBuilder {

    private final SportsVenueRepository sportsVenueRepository;

    public SportsVenueBuilder(final SportsVenueRepository sportsVenueRepository) {
        this.sportsVenueRepository = sportsVenueRepository;
    }

    public void createSportsVenue(final CreateSportsVenueInput input) {

        Optional<SportsVenues> sportsVenues = sportsVenueRepository.findById(input.getCityId());
        if (sportsVenues.isPresent()) {
            List<SportsVenues.SportsVenue> sportsVenuesInCity = sportsVenues.get().getSportsVenuesInCity();
            sportsVenuesInCity.add(createSportsVenueInCity(input));
            sportsVenueRepository.save(sportsVenues.get());
        } else {
            SportsVenues newSportsVenues = new SportsVenues();
            newSportsVenues.setCityId(input.getCityId());
            newSportsVenues.setSportsVenuesInCity(List.of(createSportsVenueInCity(input)));
            sportsVenueRepository.save(newSportsVenues);
        }
    }

    public List<SportsVenue> getSportsVenues(final String cityId) {
        Optional<SportsVenues> sportsVenues = sportsVenueRepository.findById(cityId);
        return sportsVenues.map(venues -> venues.getSportsVenuesInCity().stream()
                .map(sportsVenue -> SportsVenue.builder()
                        .sportsVenueId(sportsVenue.getSportsVenueId())
                        .displayName(sportsVenue.getDisplayName())
                        .googleMapsLink(sportsVenue.getGoogleMapsLink())
                        .availableSportsIds(sportsVenue.getAvailableSportsIds())
                        .build())
                .toList()).orElse(null);
    }

    private SportsVenues.SportsVenue createSportsVenueInCity(final CreateSportsVenueInput input) {
        //TODO: Can we use builder?
        SportsVenues.SportsVenue sportsVenue = new SportsVenues.SportsVenue();
        sportsVenue.setDisplayName(input.getDisplayName());
        sportsVenue.setGoogleMapsLink(input.getGoogleMapsLink());
        sportsVenue.setAvailableSportsIds(List.of("1"));
        //Generate incremental unique Id
        sportsVenue.setSportsVenueId(String.valueOf(System.currentTimeMillis()));
        return sportsVenue;
    }
}
