package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.SportsVenues;
import com.flickmatch.platform.dynamodb.repository.SportsVenueRepository;
import com.flickmatch.platform.graphql.input.CreateSportsVenueInput;
import com.flickmatch.platform.graphql.input.StripePaymentLinkInput;
import com.flickmatch.platform.graphql.mapper.StripePaymentLinkMapper;
import com.flickmatch.platform.graphql.type.SportsVenue;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
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
            SportsVenues newSportsVenues = SportsVenues.builder()
                    .cityId(input.getCityId())
                    .sportsVenuesInCity(List.of(createSportsVenueInCity(input)))
                    .build();
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
                        .stripePaymentLinks(StripePaymentLinkMapper
                                .toStripePaymentLinkType(sportsVenue.getStripePaymentLinks()))
                        .build())
                .toList()).orElse(null);
    }

    private SportsVenues.SportsVenue createSportsVenueInCity(final CreateSportsVenueInput input) {
        List<SportsVenues.StripePaymentLink> stripePaymentLinks = new ArrayList<>();

        for (StripePaymentLinkInput inputItem : input.getStripePaymentLinks()) {
            SportsVenues.StripePaymentLink stripePaymentLink = SportsVenues.StripePaymentLink.builder()
                    .url(inputItem.getLink())
                    .amount(inputItem.getAmount())
                    .build();

            stripePaymentLinks.add(stripePaymentLink);
        }
        SportsVenues.SportsVenue sportsVenue = SportsVenues.SportsVenue.builder()
                .displayName(input.getDisplayName())
                .googleMapsLink(input.getGoogleMapsLink())
                .availableSportsIds(List.of("1"))
                .sportsVenueId(String.valueOf(System.currentTimeMillis()))
                .stripePaymentLinks(stripePaymentLinks)
                .build();
        return sportsVenue;
    }
}
