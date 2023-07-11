package com.flickmatch.platform;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.SportsVenues;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.dynamodb.repository.SportsVenueRepository;
import com.flickmatch.platform.graphql.builder.EventBuilder;

import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import org.junit.jupiter.api.Test;
//import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;

import org.mockito.Mock;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class PlayerBuilderTest {

    @Mock
    private static EventRepository eventRepository;

    @Mock
    private static SportsVenueRepository sportsVenueRepository;

    @Mock
    private static EventBuilder eventBuilder;

    @BeforeEach
    public void init()
    {
        eventRepository = mock(EventRepository.class);
        sportsVenueRepository = mock(SportsVenueRepository.class);
        eventBuilder = mock(EventBuilder.class);
        List<SportsVenues> sportsVenues  = createSportsVenueMockData();
        List<Event> event = createEventMockData();

        when(eventRepository.findAll()).thenReturn(event);
        when(sportsVenueRepository.findAll()).thenReturn(sportsVenues);
    }

    private List<Event> createEventMockData() {

        Event.EventId eventId = Event.EventId.builder()
                .cityId("cityId")
                .date("2023-07-11")
                .build();

        List<Event.EventDetails> eventDetailsList = new ArrayList<>();

        Event.PlayerDetails playerDetails = Event.PlayerDetails.builder()
                .name("name")
                .waNumber("waNumber")
                .build();

        List<Event.PlayerDetails> playerDetailsList = new ArrayList<>();
        playerDetailsList.add(playerDetails);

        Event.EventDetails eventDetails = Event.EventDetails.builder()
                .index(1)
                .startTime(new Date())
                .endTime(new Date())
                .charges(10.0)
                .reservedPlayersCount(1)
                .waitListPlayersCount(1)
                .sportName("Football")
                .venueName("venueName")
                .venueLocationLink("venueLocationLink")
                .playerDetailsList(playerDetailsList)
                .build();
        eventDetailsList.add(eventDetails);

        Event event = Event.builder()
                .eventId(eventId)
                .eventDetailsList(eventDetailsList)
                .build();

        List<Event> eventList = new ArrayList<>();
        eventList.add(event);

        return eventList;
    }

    @Test
    public void testCreateSportsVenue_Successful(){
        List<SportsVenues> sportsVenues= (List<SportsVenues>) sportsVenueRepository.findAll();

        assertNotNull(sportsVenues);
        assertEquals(1, sportsVenues.size());
    }

    @Test
    public void testCreateEvent_Successful(){
        List<Event> eventList= (List<Event>) eventRepository.findAll();
        assertNotNull(eventList);
        assertEquals(1, eventList.size());
    }

    @Test
    public void testUpdatePlayerList_Successful(){
        sportsVenueRepository.findAll().forEach(sportsVenues -> sportsVenues.getSportsVenuesInCity().forEach(sportsVenue -> {
            assertTrue(sportsVenue.getDisplayName().equalsIgnoreCase("displayName"));
        }));
    }

    private static List<SportsVenues> createSportsVenueMockData() {
        // Create a list of sample sports venues
        List<SportsVenues> sportsVenues = new ArrayList<>();

        SportsVenues.SportsVenue sportsVenue = SportsVenues.SportsVenue.builder()
                .sportsVenueId("sportsVenueId")
                .availableSportsIds(List.of("1", "2"))
                .googleMapsLink("googleMapsLink")
                .displayName("displayName")
                .build();

        List<SportsVenues.SportsVenue> sportsVenuesInCity = new ArrayList<>();
        sportsVenuesInCity.add(sportsVenue);
        SportsVenues sportsVenues1 = SportsVenues.builder()
                .cityId("cityId")
                .sportsVenuesInCity(sportsVenuesInCity)
                .build();

        sportsVenues.add(sportsVenues1);

        return sportsVenues;
    }

    private static UpdatePlayerListInput createSampleInput() {
        List<PlayerInput> reservedPlayers = createReservedPlayers();
        List<PlayerInput> waitListPlayers = createWaitListPlayers();

        return UpdatePlayerListInput.builder()
                .date("2023-07-10")
                .startTime("14:00")
                .venueName("Sample Venue")
                .endTime("17:00")
                .charges("10")
                .format("Singles")
                .reservedPlayersList(reservedPlayers)
                .waitListPlayers(waitListPlayers)
                .build();
    }

    private static List<PlayerInput> createReservedPlayers() {
        List<PlayerInput> reservedPlayers = new ArrayList<>();

        PlayerInput player1 = PlayerInput.builder()
                .name("John Doe")
                .waNumber("25")
                .build();
        reservedPlayers.add(player1);

        PlayerInput player2 = PlayerInput.builder()
                .name("Jane Smith")
                .waNumber("30")
                .build();
        reservedPlayers.add(player2);

        // Add more reserved players as needed

        return reservedPlayers;
    }

    private static List<PlayerInput> createWaitListPlayers() {
        List<PlayerInput> waitListPlayers = new ArrayList<>();

        PlayerInput player1 = PlayerInput.builder()
                .name("Bob Johnson")
                .waNumber("27")
                .build();
        waitListPlayers.add(player1);

        PlayerInput player2 = PlayerInput.builder()
                .name("Alice Brown")
                .waNumber("32")
                .build();
        waitListPlayers.add(player2);

        // Add more waitlist players as needed

        return waitListPlayers;
    }

}
