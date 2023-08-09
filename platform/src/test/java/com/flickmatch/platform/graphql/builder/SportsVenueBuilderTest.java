package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.SportsVenues;
import com.flickmatch.platform.dynamodb.repository.SportsVenueRepository;
import com.flickmatch.platform.graphql.input.CreateSportsVenueInput;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import java.util.ArrayList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.assertEquals;

@RunWith(MockitoJUnitRunner.class)
public class SportsVenueBuilderTest {

    @Mock
    private SportsVenueRepository sportsVenueRepository;

    private SportsVenueBuilder sportsVenueBuilder;

    @Before
    public void setUp() {
        sportsVenueBuilder = new SportsVenueBuilder(sportsVenueRepository);
    }



    @Test
    public void testCreateSportsVenueWhenCityExists() {
        // Mock existing city in the repository
        String cityId = "existingCityId";
        SportsVenues existingCity = SportsVenues.builder()
                .cityId(cityId)
                .sportsVenuesInCity(new ArrayList<>()) // Add some existing sports venues if needed
                .build();

        // Create input for the new sports venue
        CreateSportsVenueInput input = CreateSportsVenueInput.builder()
                .cityId(cityId)
                .displayName("Sports Venue 1")
                .googleMapsLink("https://maps.google.com/sports_venue1")
                .stripePaymentLinkInput(new SportsVenues.StripePaymentLinkInput(50.0f, "https://stripe.com/link1"))
                .build();
        assertThat(existingCity.getCityId(), equalTo(cityId));
        assertThat(existingCity.getSportsVenuesInCity(), hasSize(0));
        assertEquals("Sports Venue 1",input.getDisplayName());
        assertEquals("https://maps.google.com/sports_venue1", input.getGoogleMapsLink());
        assertEquals(50.0f, input.getStripePaymentLinkInput().getAmount(),0.001);
        assertEquals("https://stripe.com/link1", input.getStripePaymentLinkInput().getLink());
        assertEquals(0, existingCity.getSportsVenuesInCity().size());
    }
}
