package com.flickmatch.platform.graphql.builder;

import static com.flickmatch.platform.graphql.util.DateUtil.extractDateFromISOFormatDate;

import static java.time.temporal.ChronoUnit.DAYS;
import static java.util.Date.from;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.graphql.input.JoinEventInput;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.input.UpdateEventDetailsInput;
import com.flickmatch.platform.records.ParsedUniqueEventId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import org.mockito.MockitoAnnotations;
import com.flickmatch.platform.graphql.type.City;

public class EventBuilderTest {

    @Mock
    private EventRepository eventRepository;
    @Mock
    private CityBuilder cityBuilder;

    private EventBuilder eventBuilder;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        eventRepository = mock(EventRepository.class);
        eventBuilder = new EventBuilder(eventRepository, null);
        cityBuilder = mock(CityBuilder.class);
        eventBuilder.cityBuilder = cityBuilder;
    }

    @Test
    public void testJoinEvent() throws ParseException {
        // Mock input data
        String cityId = "cityId";
        String eventId = "2023-07-24-01";
        String[] parts = eventId.split("-");
        String date =  parts[0] + "-" + parts[1] + "-" + parts[2];
        int index = Integer.parseInt(parts[3]);
        String playerName = "John Doe";
        String playerWaNumber = "1234567890";
        // Create the join event input
        PlayerInput player =  PlayerInput.builder()
                .name(playerName)
                .waNumber(playerWaNumber)
                .build();
        JoinEventInput joinEventInput = JoinEventInput.builder()
                .eventId(eventId)
                .cityId(cityId)
                .player(player)
                .build();
        Event.EventDetails existingEventDetails = Event.EventDetails.builder()
                .index(1)
                .startTime(new Time(9,0,0))
                .endTime(new Time(10,0,0))
                .charges(10.0)
                .reservedPlayersCount(5)
                .waitListPlayersCount(2)
                .sportName("Football")
                .venueName("Stadium")
                .venueLocationLink("https://maps.google.com/stadium")
                .playerDetailsList(new ArrayList<>())
                .build();

        // Mock the existing event in the repository
        existingEventDetails.setIndex(1);
        List<Event.EventDetails> existingEventDetailsList = new ArrayList<>();
        existingEventDetailsList.add(existingEventDetails);

        Event existingEvent = new Event();
        existingEvent.setCityId(cityId);
        existingEvent.setDate("2023-07-22");
        existingEvent.setEventDetailsList(existingEventDetailsList);

        Optional<Event> eventsInCity = createEventMockData();
         assertThat(eventsInCity, notNullValue());
        Optional<Event.EventDetails> selectedEvent = eventsInCity.get().getEventDetailsList()
                .stream().filter(eventDetails -> eventDetails.getIndex().equals(existingEventDetails.getIndex())).findFirst();
        assertThat(selectedEvent, notNullValue());
        assertThat(eventsInCity.get().getEventDetailsList(), hasSize(1));
        assertThat(selectedEvent.get().getPlayerDetailsList(), hasSize(1));
        assertThat(selectedEvent.get().getPlayerDetailsList().size(), equalTo(selectedEvent.get().getReservedPlayersCount() + selectedEvent.get().getWaitListPlayersCount()));
    }
    private Optional<Event> createEventMockData() {

        Event.EventId eventId = Event.EventId.builder()
                .cityId("cityId")
                .date("2023-07-11")
                .build();

        List<Event.EventDetails> eventDetailsList = new ArrayList<>();
        eventDetailsList.add(getEventDetails(new Date(), new Date()));

        Optional<Event> event = Optional.ofNullable(Event.builder()
                .eventId(eventId)
                .eventDetailsList(eventDetailsList)
                .build());
        return event;
    }

    private List<Event.PlayerDetails> getListOfPlayerDetails() {
        List<Event.PlayerDetails> playerDetailsList = new ArrayList<>();
        playerDetailsList.add(getPlayerDetails());

        return playerDetailsList;
    }

    private Event.PlayerDetails getPlayerDetails() {
        return Event.PlayerDetails.builder()
                .name("name")
                .waNumber("waNumber")
                .build();
    }

    private Event.EventDetails getEventDetails(Date startTime, Date endTime) {
        return Event.EventDetails.builder()
                .index(1)
                .startTime(startTime)
                .endTime(endTime)
                .charges(10.0)
                .reservedPlayersCount(0)
                .waitListPlayersCount(1)
                .sportName("Football")
                .venueName("venueName")
                .venueLocationLink("venueLocationLink")
                .playerDetailsList(getListOfPlayerDetails())
                .build();
    }

    @Test
    public void testMapEventToGQLType() throws ParseException {
        Event.EventDetails mockEventDetails = mock(Event.EventDetails.class);

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        dateFormat.setTimeZone(TimeZone.getTimeZone("GMT+5:30"));

        Date startTime = dateFormat.parse("2023-08-13 10:00:00");
        Date endTime = dateFormat.parse("2023-08-13 12:00:00");

        when(mockEventDetails.getStartTime()).thenReturn(startTime);
        when(mockEventDetails.getEndTime()).thenReturn(endTime);

        assertThat(mockEventDetails.getStartTime(), equalTo(startTime));
        assertThat(mockEventDetails.getEndTime(),equalTo(endTime));

    }

    @Test
    public void testGetCurrencyForCity() {
        String currencyForIndia = eventBuilder.getCurrencyForCity("1");
        assertEquals("INR", currencyForIndia);

        String currencyForUSA = eventBuilder.getCurrencyForCity("2");
        assertEquals("INR", currencyForUSA);

        String currencyForMountainView = eventBuilder.getCurrencyForCity("3");
        assertEquals("USD", currencyForMountainView);

        String currencySanJose = eventBuilder.getCurrencyForCity("4");
        assertEquals("USD", currencySanJose);

        String currencyForSanFrancisco = eventBuilder.getCurrencyForCity("5");
        assertEquals("USD", currencyForSanFrancisco);

    }

    @Test
    public void testGetEvents() {
        // Mock input data
        List<Event> eventsList = new ArrayList<>();
        String cityId = "2";
        String localTimeZone = "GMT+05:30";

        Instant currentTime = Instant.now();
        String todayDateAsString = extractDateFromISOFormatDate(from(currentTime), localTimeZone);
        String yesterdayDateAsString = extractDateFromISOFormatDate(from(currentTime.minus(1, DAYS)), localTimeZone);
        String tenDaysFromNowDateAsString = extractDateFromISOFormatDate(from(currentTime.plus(10, DAYS)), localTimeZone);

        Event eventToday = getMockEvent(cityId, todayDateAsString, getEventDetailsList(todayDateAsString, localTimeZone));
        Event eventYesterday = getMockEvent(cityId, yesterdayDateAsString, getEventDetailsList(yesterdayDateAsString, localTimeZone));
        Event eventAfter10DaysFromToday = getMockEvent(cityId, tenDaysFromNowDateAsString, getEventDetailsList(tenDaysFromNowDateAsString, localTimeZone));

        eventsList.add(eventToday);
        eventsList.add(eventYesterday);
        eventsList.add(eventAfter10DaysFromToday);

        when(eventRepository.findByEventIdCityIdAndEventIdDateBetween(any(), any(), any())).thenReturn(eventsList);

        // Call the method under test
        List<com.flickmatch.platform.graphql.type.Event> result = eventBuilder.getEvents(cityId, localTimeZone);

        // Verify the result
        // events for 10 days from now should not be included
        assertEquals(4, result.size());
    }

    private List<Event.EventDetails> getEventDetailsList(String dateAsString, String localTimeZone) {

        LocalDate date = LocalDate.parse(dateAsString);

        LocalDateTime game1startTime = date.atTime(20, 0); // 8 PM
        LocalDateTime game1endTime = date.atTime(21, 0);   // 9 PM
        LocalDateTime game2startTime = date.atTime(7, 0); // 7 AM
        LocalDateTime game2endTime = date.atTime(8, 0);   // 8 AM

        Date game1startDate = Date.from(game1startTime.atZone(ZoneId.of(localTimeZone)).toInstant());
        Date game1endDate = Date.from(game1endTime.atZone(ZoneId.of(localTimeZone)).toInstant());
        Date game2startDate = Date.from(game2startTime.atZone(ZoneId.of(localTimeZone)).toInstant());
        Date game2endDate = Date.from(game2endTime.atZone(ZoneId.of(localTimeZone)).toInstant());

        Event.EventDetails event8PMto9PM = getEventDetails(game1startDate, game1endDate);
        Event.EventDetails event7AMMto8AM = getEventDetails(game2startDate, game2endDate);

        List<Event.EventDetails> listOfEventDetailsForADay = new ArrayList<>();
        listOfEventDetailsForADay.add(event8PMto9PM);
        listOfEventDetailsForADay.add(event7AMMto8AM);

        return listOfEventDetailsForADay;
    }

    private Event getMockEvent(String cityId, String date, List<Event.EventDetails> eventDetailsList) {
        return Event.builder()
                .eventId(Event.EventId.builder().cityId(cityId).date(date).build())
                .eventDetailsList(eventDetailsList)
                .build();
    }

    @Test
    public void testGetUniqueEventById() throws ParseException {

        // Mock input data
        String uniqueEventId = "1-2023-07-11-1";

        // Mock the CityBuilder to return a City with a specific timezone
        com.flickmatch.platform.graphql.type.City city = City.builder().cityId("1").localTimeZone("GMT+05:30").build();
        when(cityBuilder.getCity("1")).thenReturn(city);

        // Mock the existing event in the repository
        Event.EventDetails eventDetails = Event.EventDetails.builder()
                .index(1)
                .startTime(new SimpleDateFormat("yyyy-MM-dd").parse("2023-07-24"))
                .endTime(new SimpleDateFormat("yyyy-MM-dd").parse("2023-07-24"))
                .charges(10.0)
                .reservedPlayersCount(5)
                .waitListPlayersCount(2)
                .sportName("Football")
                .venueName("Stadium")
                .venueLocationLink("https://maps.google.com/stadium")
                .playerDetailsList(new ArrayList<>())
                .build();

        Event.EventId eventIdObj = new Event.EventId("1", "2023-07-11"); // Create EventId object

        Event event = new Event(eventIdObj); // Use EventId object in Event constructor
        event.setEventDetailsList(Collections.singletonList(eventDetails));

        Optional<Event> optionalEvent = Optional.of(event);
        when(eventRepository.findById(any(Event.EventId.class))).thenReturn(optionalEvent);

        // Call the method under test
        com.flickmatch.platform.graphql.type.Event result = eventBuilder.getEventById(uniqueEventId);

        // Assert the results
        assertThat(result, notNullValue());
        assertThat(result.getUniqueEventId(), equalTo(uniqueEventId)); // Adjust this assertion to match your expected format
        assertThat(result.getStartTime(), equalTo(eventDetails.getStartTime()));
        assertThat(result.getEndTime(), equalTo(eventDetails.getEndTime()));
        assertThat(result.getVenueName(), equalTo(eventDetails.getVenueName()));
        assertThat(result.getVenueLocationLink(), equalTo(eventDetails.getVenueLocationLink()));
        assertThat(result.getReservedPlayersCount(), equalTo(eventDetails.getReservedPlayersCount()));
        assertThat(result.getWaitListPlayersCount(), equalTo(eventDetails.getWaitListPlayersCount()));

        // Case where event Id is invalid :
        String uniqueEventId1 = "1-2026-07-11-1";

        // Mock the event repository to return an empty Optional
        when(eventRepository.findById(any(Event.EventId.class))).thenReturn(Optional.empty());

        // Call the method under test
        com.flickmatch.platform.graphql.type.Event result1 = eventBuilder.getEventById(uniqueEventId1);

        // Assert that the result is null
        assertThat(result1, equalTo(null));

    }

    @Test
    public void testGetEventById_IndexOutOfBounds() throws ParseException {
        // Mock input data
        String uniqueEventId = "1-2023-07-11-2"; // index 2 which is out of bounds

        // Mock the CityBuilder to return a City with a specific timezone
        com.flickmatch.platform.graphql.type.City city = City.builder().cityId("1").localTimeZone("GMT+05:30").build();
        when(cityBuilder.getCity("1")).thenReturn(city);

        // Mock the existing event in the repository
        Event.EventDetails eventDetails = Event.EventDetails.builder()
                .index(1)
                .startTime(new SimpleDateFormat("yyyy-MM-dd").parse("2023-07-24"))
                .endTime(new SimpleDateFormat("yyyy-MM-dd").parse("2023-07-24"))
                .charges(10.0)
                .reservedPlayersCount(5)
                .waitListPlayersCount(2)
                .sportName("Football")
                .venueName("Stadium")
                .venueLocationLink("https://maps.google.com/stadium")
                .playerDetailsList(new ArrayList<>())
                .build();

        Event.EventId eventIdObj = new Event.EventId("1", "2023-07-11"); // Create EventId object

        Event event = new Event(eventIdObj); // Use EventId object in Event constructor
        event.setEventDetailsList(Collections.singletonList(eventDetails));

        Optional<Event> optionalEvent = Optional.of(event);
        when(eventRepository.findById(any(Event.EventId.class))).thenReturn(optionalEvent);

        // Call the method under test
        com.flickmatch.platform.graphql.type.Event result = eventBuilder.getEventById(uniqueEventId);

        // Assert that the result is null due to index out of bounds
        assertThat(result, equalTo(null));
    }

    @Test
    void testUpdateEventDetails_UpdatePricePlayersAndCredits() throws ParseException {
        // Date formatter
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        // Create a real UpdateEventDetailsInput object
        UpdateEventDetailsInput input = UpdateEventDetailsInput.builder()
                .uniqueEventId("1-2023-07-11-1")
                .charges(Optional.of(500.0))
                .reservedPlayersCount(Optional.of(20))
                .credits(Optional.of(100.0))
                .build();

        // Create mock Event and EventDetails
        Event event = new Event(new Event.EventId("1", "2023-07-11")); // Fixed event ID to match parsed values
        Event.EventDetails eventDetails = Event.EventDetails.builder()
                .index(1) // Ensure index matches parsedUniqueEventId.index()
                .startTime(dateFormat.parse("2023-07-24"))
                .endTime(dateFormat.parse("2023-07-24"))
                .charges(10.0)
                .reservedPlayersCount(5)
                .waitListPlayersCount(2)
                .sportName("Football")
                .venueName("Stadium")
                .venueLocationLink("https://maps.google.com/stadium")
                .playerDetailsList(new ArrayList<>())
                .credits(1.0)
                .build();

        if (event.getEventDetailsList() == null) {
            event.setEventDetailsList(new ArrayList<>());
        }
        event.getEventDetailsList().add(eventDetails);

        event.setEventDetailsList(Collections.singletonList(eventDetails));

        Optional<Event> optionalEvent = Optional.of(event);
        when(eventRepository.findById(any(Event.EventId.class))).thenReturn(optionalEvent);


        when(eventRepository.save(any(Event.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Execute the method
        Event updatedEvent = eventBuilder.updateEventDetails(input);

        // Validate updates
        assertNotNull(updatedEvent);
        Event.EventDetails updatedDetails = updatedEvent.getEventDetailsList().get(0);

        assertEquals(500.0, updatedDetails.getCharges(), "Charges should be updated correctly");
        assertEquals(20, updatedDetails.getReservedPlayersCount(), "Reserved players count should be updated");
        assertEquals(100.0, updatedDetails.getCredits(), "Credits should be updated");

    }
    @Test
    void testUpdateEventDetails_EventNotFound() {
        // Mock input
        UpdateEventDetailsInput input = mock(UpdateEventDetailsInput.class);
        when(input.getUniqueEventId()).thenReturn("city123-2025-03-20-1");

        // Mock repository to return empty
        when(eventRepository.findById(any())).thenReturn(Optional.empty());

        // Exception validation
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            eventBuilder.updateEventDetails(input);
        });

        assertEquals("Event not found", exception.getMessage());
        verify(eventRepository, times(1)).findById(any());
    }

}
