package com.flickmatch.platform.integration;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.SportsVenues;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.dynamodb.repository.SportsVenueRepository;
import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.PlayerBuilder;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.anyBoolean;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.never;


public class PlayerBuilderIntegrationTest {

    private static final String playerName1 = "John Doe";
    private static final String playerName2 = "Jane Smith";
    private static final String playerName3 = "Bob Johnson";
    private static final String playerName4 = "Alice Brown";

    private static final String validWaNumber = "910123456789";

    private static final String invalidWaNumber = "1234";



    @Mock
    private EventRepository eventRepository;

    @Mock
    private SportsVenueRepository sportsVenueRepository;

    @Mock
    private EventBuilder eventBuilder;

    @InjectMocks
    private PlayerBuilder playerBuilder;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);

            eventRepository = mock(EventRepository.class);
            sportsVenueRepository = mock(SportsVenueRepository.class);
            eventBuilder = mock(EventBuilder.class);

            List<SportsVenues> sportsVenues = createSportsVenueMockData();
            List<Event> event = createEventMockData();

            when(eventRepository.findAll()).thenReturn(event);
            when(sportsVenueRepository.findAll()).thenReturn(sportsVenues);

            playerBuilder = new PlayerBuilder(eventRepository, sportsVenueRepository);
        }



    @Test
    public void testUpdatePlayerList_ValidInput_SuccessfulUpdate() throws ParseException {
        // Arrange
        UpdatePlayerListInput input = UpdatePlayerListInput.builder()
                .reservedPlayersList(createReservedPlayers())
                .waitListPlayers(createWaitListPlayers())
                .date("19-07-23")
                .venueName("venueName")
                .format("format")
                .charges("charges")
                .endTime("")
                .startTime("")
                .build();

        // Mock the repository calls
        when(sportsVenueRepository.findAll()).thenReturn(createSportsVenueMockData());
        when(eventRepository.findById(any())).thenReturn(Optional.empty());
        when(eventBuilder.createEvent(any(), anyBoolean())).thenReturn(getMockEvent());
        when(eventRepository.findAll()).thenReturn(createEventMockData());

        List<PlayerInput> reservedPlayers = createReservedPlayers();
        List<PlayerInput> waitListPlayers = createWaitListPlayers();

        List<Event.PlayerDetails> playerDetailsList = playerBuilder.buildPlayerList(reservedPlayers, waitListPlayers);
        assertThat(playerDetailsList, notNullValue());
        assertThat(playerDetailsList, hasSize(4));


    }

    @Test
    public void testUpdatePlayerList_InvalidVenue_ThrowsException() throws ParseException {
        // Arrange
        UpdatePlayerListInput input = UpdatePlayerListInput.builder()
                .reservedPlayersList(createReservedPlayers())
                .waitListPlayers(createWaitListPlayers())
                .date("19-07-23")
                .venueName(null)
                .format("format")
                .charges("charges")
                .endTime("")
                .startTime("")
                .build();

        // Mock the repository calls
        when(sportsVenueRepository.findAll()).thenReturn(createSportsVenueMockData());

        // Act and Assert
        assertThrows(IllegalArgumentException.class, () -> playerBuilder.updatePlayerList(input));
        verify(eventRepository, never()).save(any(Event.class));
    }

    // Helper method to generate mock sports venues

    // Helper method to generate a mock event
    private Event getMockEvent() {
        Event.EventId eventId = Event.EventId.builder()
                .cityId("cityId")
                .date("2023-07-11")
                .build();
        List<Event.EventDetails> eventDetailsList = new ArrayList<>();

        Event.PlayerDetails playerDetails = Event.PlayerDetails.builder()
                .name("name")
                .waNumber(validWaNumber)
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
        return event;
    }

    private static List<PlayerInput> createReservedPlayers() {
        List<PlayerInput> reservedPlayers = new ArrayList<>();

        PlayerInput player1 = PlayerInput.builder()
                .name(playerName1)
                .waNumber(validWaNumber)
                .build();
        reservedPlayers.add(player1);

        PlayerInput player2 = PlayerInput.builder()
                .name(playerName2)
                .waNumber(validWaNumber)
                .build();
        reservedPlayers.add(player2);

        return reservedPlayers;
    }
    private static List<PlayerInput> createWaitListPlayers() {
        List<PlayerInput> waitListPlayers = new ArrayList<>();

        PlayerInput player1 = PlayerInput.builder()
                .name(playerName3)
                .waNumber(validWaNumber)
                .build();
        waitListPlayers.add(player1);

        PlayerInput player2 = PlayerInput.builder()
                .name(playerName4)
                .waNumber(validWaNumber)
                .build();
        waitListPlayers.add(player2);

        // Add more waitlist players as needed

        return waitListPlayers;
    }
    private static List<SportsVenues> createSportsVenueMockData() {
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

    private List<Event> createEventMockData() {

        Event.EventId eventId = Event.EventId.builder()
                .cityId("cityId")
                .date("2023-07-11")
                .build();

        List<Event.EventDetails> eventDetailsList = new ArrayList<>();

        Event.PlayerDetails playerDetails = Event.PlayerDetails.builder()
                .name("name")
                .waNumber(validWaNumber)
                .build();

        List<Event.PlayerDetails> playerDetailsList = new ArrayList<>();
        playerDetailsList.add(playerDetails);
        Integer number = 1;
        Event.EventDetails eventDetails = Event.EventDetails.builder()
                .index(number)
                .startTime(playerBuilder.validateStartTime("09:00 AM"))
                .endTime(playerBuilder.validateStartTime("10:00 AM"))
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

}
