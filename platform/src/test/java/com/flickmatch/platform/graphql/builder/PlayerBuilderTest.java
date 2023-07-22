package com.flickmatch.platform.graphql.builder;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.SportsVenues;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.dynamodb.repository.SportsVenueRepository;
import com.flickmatch.platform.graphql.input.JoinEventInput;
import com.flickmatch.platform.graphql.input.PlayerInput;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PlayerBuilderTest {

    private static final String playerName1 = "John Doe";
    private static final String playerName2 = "Jane Smith";
    private static final String playerName3 = "Bob Johnson";
    private static final String playerName4 = "Alice Brown";

    @Mock
    private EventRepository eventRepository;

    @Mock
    private SportsVenueRepository sportsVenueRepository;

    @InjectMocks
    private EventBuilder eventBuilder;

    @Autowired
    private PlayerBuilder playerBuilder;

    @BeforeEach
    public void init() {
        eventRepository = mock(EventRepository.class);
        sportsVenueRepository = mock(SportsVenueRepository.class);
        //eventBuilder = mock(EventBuilder.class);
        eventBuilder = new EventBuilder(eventRepository);
        playerBuilder = mock(PlayerBuilder.class);

        List<SportsVenues> sportsVenues = createSportsVenueMockData();
        List<Event> event = createEventMockData();

        when(eventRepository.findAll()).thenReturn(event);
        when(sportsVenueRepository.findAll()).thenReturn(sportsVenues);
    }

    // Rest of the code...

    @Test
    public void testCreateSportsVenue_Successful(){
        List<SportsVenues> sportsVenues= (List<SportsVenues>) sportsVenueRepository.findAll();

        assertThat(sportsVenues, notNullValue());
        assertThat(sportsVenues, hasSize(1));
    }


    @Test
    public void testCreateEvent_Successful(){
        List<Event> eventList= (List<Event>) eventRepository.findAll();
        assertThat(eventList, notNullValue());
        assertThat(eventList, hasSize(1));
    }



    @Test
    public void testUpdatePlayerList_Successful() {
        sportsVenueRepository.findAll().forEach(sportsVenues -> sportsVenues.getSportsVenuesInCity().forEach(sportsVenue -> {
            assertThat(sportsVenue.getDisplayName(), equalToIgnoringCase("displayName"));
        }));
    }

    @Test
    public void testUpdatePlayerList_Unsuccessful() {
        // Prepare test data
        List<SportsVenues> sportsVenues = createSportsVenueMockData();

        // Modify the mock behavior to simulate an invalid displayName
        sportsVenues.get(0).getSportsVenuesInCity().get(0).setDisplayName("InvalidDisplayName");

        // Mock the behavior of sportsVenueRepository.findAll()
        when(sportsVenueRepository.findAll()).thenReturn(sportsVenues);

        // Perform the test
        assertThrows(AssertionError.class, () -> {
            testUpdatePlayerList_Successful();
        });

        // Verify the outcome
        // In this case, we expect an assertion error to be thrown because the displayName check fails
    }

    // Rest of the code...

    @Test
    public void testBuildPlayerList_Successful() {
        // Prepare test data
        List<PlayerInput> reservedPlayers = createReservedPlayers();
        List<PlayerInput> waitListPlayers = createWaitListPlayers();

        // Perform the test
        PlayerBuilder playerBuilder = new PlayerBuilder(null, null);

        List<Event.PlayerDetails> playerDetailsList = playerBuilder.buildPlayerList(reservedPlayers, waitListPlayers);

        // Verify the outcome
        // Verify that the playerDetailsList is not null and has the expected size
        assertThat(playerDetailsList, notNullValue());
        assertThat(playerDetailsList, hasSize(4));

        // Verify the names of the players in the list
        List<String> playerNames = new ArrayList<>();

        playerDetailsList.forEach(playerDetails -> playerNames.add(playerDetails.getName()));

        assertThat(playerNames, containsInAnyOrder(playerName1, playerName2, playerName3, playerName4));
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

    private static List<PlayerInput> createWaitListPlayers() {
        List<PlayerInput> waitListPlayers = new ArrayList<>();

        PlayerInput player1 = PlayerInput.builder()
                .name(playerName3)
                .waNumber("27")
                .build();
        waitListPlayers.add(player1);

        PlayerInput player2 = PlayerInput.builder()
                .name(playerName4)
                .waNumber("32")
                .build();
        waitListPlayers.add(player2);

        // Add more waitlist players as needed

        return waitListPlayers;
    }

    private static List<PlayerInput> createReservedPlayers() {
        List<PlayerInput> reservedPlayers = new ArrayList<>();

        PlayerInput player1 = PlayerInput.builder()
                .name(playerName1)
                .waNumber("25")
                .build();
        reservedPlayers.add(player1);

        PlayerInput player2 = PlayerInput.builder()
                .name(playerName2)
                .waNumber("30")
                .build();
        reservedPlayers.add(player2);

        // Add more reserved players as needed

        return reservedPlayers;
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
    public void joinEvent_Successful()
    {
        PlayerInput playerInput = PlayerInput.builder()
                .name("name")
                .waNumber("waNumber")
                .build();
        JoinEventInput joinEventInput = JoinEventInput.builder()
                .cityId("cityId")
                .eventId("eventIda")
                .player(playerInput)
                .build();

        eventBuilder.joinEvent(joinEventInput);

    }
}
