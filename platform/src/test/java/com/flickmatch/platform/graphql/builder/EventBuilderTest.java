package com.flickmatch.platform.graphql.builder;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.graphql.input.JoinEventInput;
import com.flickmatch.platform.graphql.input.PlayerInput;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
                .reservedPlayersCount(0)
                .waitListPlayersCount(1)
                .sportName("Football")
                .venueName("venueName")
                .venueLocationLink("venueLocationLink")
                .playerDetailsList(playerDetailsList)
                .build();
        eventDetailsList.add(eventDetails);

        Optional<Event> event = Optional.ofNullable(Event.builder()
                .eventId(eventId)
                .eventDetailsList(eventDetailsList)
                .build());
        return event;
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
}
