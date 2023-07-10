//package com.flickmatch.platform;
//import com.flickmatch.platform.dynamodb.model.Event;
//import com.flickmatch.platform.dynamodb.model.SportsVenues;
//import com.flickmatch.platform.dynamodb.repository.EventRepository;
//import com.flickmatch.platform.dynamodb.repository.SportsVenueRepository;
//import com.flickmatch.platform.graphql.builder.EventBuilder;
//import com.flickmatch.platform.graphql.builder.PlayerBuilder;
//import com.flickmatch.platform.graphql.input.PlayerInput;
//import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
//import com.flickmatch.platform.graphql.util.DateUtil;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.ArgumentCaptor;
//import org.mockito.Captor;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.mockito.stubbing.OngoingStubbing;
//import org.springframework.util.StringUtils;
//
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//import java.util.Optional;
//import java.util.TimeZone;
//import java.util.concurrent.atomic.AtomicReference;
//
//import static org.hamcrest.MatcherAssert.assertThat;
//import static org.hamcrest.Matchers.*;
//import static org.mockito.Mockito.*;
//
//class PlayerBuilderTest {
//
//    @Mock
//    private EventRepository eventRepository;
//
//    @Mock
//    private SportsVenueRepository sportsVenueRepository;
//
//    @Mock
//    private EventBuilder eventBuilder;
//
//    @InjectMocks
//    private PlayerBuilder playerBuilder;
//
//    @Captor
//    private ArgumentCaptor<Event> eventCaptor;
//
//    @BeforeEach
//    void setup() {
//        MockitoAnnotations.openMocks(this);
//    }
//
//    public static UpdatePlayerListInput createSampleInput() {
//        List<PlayerInput> reservedPlayers = createReservedPlayers();
//        List<PlayerInput> waitListPlayers = createWaitListPlayers();
//
//        return UpdatePlayerListInput.builder()
//                .date("2023-07-10")
//                .startTime("14:00")
//                .venueName("Sample Venue")
//                .endTime("17:00")
//                .charges("10")
//                .format("Singles")
//                .reservedPlayersList(reservedPlayers)
//                .waitListPlayers(waitListPlayers)
//                .build();
//    }
//
//    private static List<PlayerInput> createReservedPlayers() {
//        List<PlayerInput> reservedPlayers = new ArrayList<>();
//
//        PlayerInput player1 = PlayerInput.builder()
//                .name("John Doe")
//                .waNumber("25")
//                .build();
//        reservedPlayers.add(player1);
//
//        PlayerInput player2 = PlayerInput.builder()
//                .name("Jane Smith")
//                .waNumber("30")
//                .build();
//        reservedPlayers.add(player2);
//
//        // Add more reserved players as needed
//
//        return reservedPlayers;
//    }
//
//    private static List<PlayerInput> createWaitListPlayers() {
//        List<PlayerInput> waitListPlayers = new ArrayList<>();
//
//        PlayerInput player1 = PlayerInput.builder()
//                .name("Bob Johnson")
//                .waNumber("27")
//                .build();
//        waitListPlayers.add(player1);
//
//        PlayerInput player2 = PlayerInput.builder()
//                .name("Alice Brown")
//                .waNumber("32")
//                .build();
//        waitListPlayers.add(player2);
//
//        // Add more waitlist players as needed
//
//        return waitListPlayers;
//    }
//
//    @Test
//    void testUpdatePlayerList_Successful() throws ParseException {
//        // Prepare test data
//        UpdatePlayerListInput input = createSampleInput();
//
//        // Mock the behavior of sportsVenueRepository.findAll()
//      //  when(sportsVenueRepository.findAll()).thenReturn(createSampleSportsVenues());
//        when(sportsVenueRepository.findAll()).thenReturn(createSampleSportsVenues());
//
//        // Mock the behavior of eventRepository.findById()
//        when(eventRepository.findById(any())).thenReturn(Optional.empty());
//
//        // Mock the behavior of eventBuilder.createEvent()
//        when(eventBuilder.createEvent(any(), anyBoolean())).thenReturn(createSampleEvent());
//
//        // Perform the test
//        playerBuilder.updatePlayerList(input);
//
//        // Verify the behavior
//
//        // Verify that sportsVenueRepository.findAll() was called
//        verify(sportsVenueRepository).findAll();
//
//        // Verify that eventRepository.findById() was called with the expected argument
//        verify(eventRepository).findById(eq(new Event.EventId("cityId", "2023-07-10")));
//
//        // Verify that eventBuilder.createEvent() was called with the expected arguments
//        verify(eventBuilder, times(2)).createEvent(any(), anyBoolean());
//
//        // Verify that eventRepository.save() was called with the captured event
//        verify(eventRepository).save(eventCaptor.capture());
//        assertThat(eventCaptor.getValue(), equalTo(createSampleEvent()));
//    }
//
//    private List<Event> createSampleSportsVenues() {
//        // Create a list of sample sports venues
//        List<Event> sportsVenues = new ArrayList<>();
//
//        Event sportsVenue = new Event();
//        sportsVenue.setCityId("cityId");
//        sportsVenue.setDate("2023-07-10");
//
//        // Add more sports venues as needed
//
//        sportsVenues.add(sportsVenue);
//        return sportsVenues;
//    }
//
//    private Event createSampleEvent() {
//        // Create a sample event
//
//        Event.EventId eventId = Event.EventId.builder()
//                .cityId("cityId")
//                .date("2023-07-10")
//                .build();
//        Event event = new Event(eventId);
//        event.setEventDetailsList(new ArrayList<>());
//        return event;
//    }
//}
