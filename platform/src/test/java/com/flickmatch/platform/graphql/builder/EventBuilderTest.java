package com.flickmatch.platform.graphql.builder;

import static com.flickmatch.platform.graphql.util.DateUtil.extractDateFromISOFormatDate;
import static java.time.Instant.now;
import static java.time.temporal.ChronoUnit.DAYS;
import static java.time.temporal.ChronoUnit.HOURS;
import static java.util.Date.from;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.graphql.input.JoinEventInput;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.util.DateUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;

public class EventBuilderTest {

    @Mock
    private EventRepository eventRepository;

    private EventBuilder eventBuilder;
    @BeforeEach
    public void setup() {
        eventRepository = mock(EventRepository.class);
        eventBuilder = new EventBuilder(eventRepository, null);
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
        String cityId = "2";
        String localTimeZone = "GMT+05:30";

        List<Event> pastEvents = new ArrayList<>();

        Instant currentTime = Instant.now();

        String todayDate = extractDateFromISOFormatDate(from(currentTime), localTimeZone);
        String yesterdayDate = extractDateFromISOFormatDate(from(currentTime.minus(1, DAYS)), localTimeZone);
        Event eventToday = getMockEvent(cityId, todayDate, getEventDetailsList(currentTime));
        Event eventYesterday = getMockEvent(cityId, yesterdayDate, getEventDetailsList(currentTime));
        pastEvents.add(eventYesterday);

        Event.EventId eventIdForToday = Event.EventId.builder().cityId(cityId).date(todayDate).build();

        // Mock the event repository to return the list of events
        when(eventRepository.findById(eq(eventIdForToday))).thenReturn(Optional.of(eventToday));
        when(eventRepository.findAll()).thenReturn(pastEvents);


        // Call the method under test
        List<com.flickmatch.platform.graphql.type.Event> result = eventBuilder.getEvents(cityId, localTimeZone);

        // Verify the result
        assertEquals(2, result.size());
    }

    private List<Event.EventDetails> getEventDetailsList(Instant currentTime) {

        Event.EventDetails eventInFuture1 = getEventDetails(from(currentTime.plus(1, HOURS)),
                from(currentTime.plus(2, HOURS)));

        Event.EventDetails eventInPast1 = getEventDetails(from(currentTime.minus(4, HOURS)),
                from(currentTime.minus(3, HOURS)));

        Event.EventDetails eventInPast2 = getEventDetails(from(currentTime.minus(4, DAYS)),
                from(currentTime.minus(3, DAYS)));

        List<Event.EventDetails> listOfEventDetailsForADay = new ArrayList<>();
        listOfEventDetailsForADay.add(eventInFuture1);
        listOfEventDetailsForADay.add(eventInPast1);

        return listOfEventDetailsForADay;
    }

    private Event getMockEvent(String cityId, String date, List<Event.EventDetails> eventDetailsList) {
        return Event.builder()
                .eventId(Event.EventId.builder().cityId(cityId).date(date).build())
                .eventDetailsList(eventDetailsList)
                .build();
    }
}
