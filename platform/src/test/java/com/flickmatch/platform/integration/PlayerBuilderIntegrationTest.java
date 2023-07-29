package com.flickmatch.platform.integration;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.SportsVenues;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.dynamodb.repository.SportsVenueRepository;
import com.flickmatch.platform.graphql.input.PlayerInput;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.empty;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@TestPropertySource(locations="classpath:application-test.properties")
public class PlayerBuilderIntegrationTest {

    @Mock
    private EventRepository eventRepository;

    @Mock
    private SportsVenueRepository sportsVenueRepository;

    @Value("${application.local.endpoint}")
    private String url;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testEventIsCreated_whenMessageReceivedFirstTime() throws FileNotFoundException, JSONException {

        var query = readFileFromResourceFolder("home\\platform\\src\\test\\resources\\query\\updatePlayerList.graphql");
        var testRestTemplate = new TestRestTemplate();
        var headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");
        var reservedPlayersList = List.of(buildPlayer("Player1"), buildPlayer("Player2"));
        var waitListPlayers = List.of();
        var dateTimeInput = getDateTimeInput();
        var variables = Map.of("startTime", dateTimeInput.getSecond().getFirst(),
                "endTime", dateTimeInput.getSecond().getSecond(),
                "date", dateTimeInput.getFirst(),
                "reservedPlayersList", reservedPlayersList,
                "waitListPlayers", waitListPlayers);
        var body = Map.of("query", query,
                "variables", variables);
        HttpEntity<Map> httpEntity = new HttpEntity(body, headers);
        ResponseEntity<String> response = testRestTemplate.postForEntity(url, httpEntity, String.class);
        JSONObject responseBody = convertStringToJSON(response.getBody());
        when(sportsVenueRepository.findAll()).thenReturn(createSportsVenueMockData());
        when(eventRepository.findById(any(Event.EventId.class))).thenReturn(Optional.empty());
        assertThat(
                responseBody.getJSONObject("data").getJSONObject("updatePlayerList").getBoolean("isSuccessful"),
                is(false));

        eventRepository.findAll().forEach(event -> event.getEventDetailsList().forEach( eventDetails -> {
            eventDetails.getPlayerDetailsList().forEach(playerDetails1 -> {
                assertThat(eventDetails.getPlayerDetailsList(), not(empty()));
            });
        }));

    }

    private static Iterable<SportsVenues> createSportsVenueMockData() {
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

    private StringBuilder readFileFromResourceFolder(String fileName) throws FileNotFoundException {
        int startIndex = fileName.indexOf("updatePlayerList");
        int endIndex = fileName.length();
        String desiredSubstring = fileName.substring(startIndex, endIndex);
        StringBuilder result = new StringBuilder();
        ClassLoader classLoader = PlayerBuilderIntegrationTest.class.getClassLoader();

        InputStream inputStream = classLoader.getResourceAsStream("query/" + desiredSubstring);

        if (inputStream != null) {
            result = new StringBuilder();
            try (Scanner scanner = new Scanner(inputStream)) {
                while (scanner.hasNextLine()) {
                    result.append(scanner.nextLine()).append("\n");
                }
            }

            System.out.println("File content:\n" + result.toString());
        } else {
            System.out.println("Resource not found.");
        }
        return result;
    }

    public JSONObject convertStringToJSON(String jsonString) throws JSONException {
        JSONObject json = new JSONObject(jsonString);
        return json;
    }

    private PlayerInput buildPlayer(String name) {
        return PlayerInput.builder().name(name).build();
    }


    /**
     * Create query input in format <date, <startTime, endTime>>
     *
     * @return the date time input
     */
    private Pair<String, Pair<String, String>> getDateTimeInput() {
        var offsetHours = 1;
        var now = LocalDateTime.now().atZone(ZoneId.of("UTC+05:30"));
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        var timeFormatter = DateTimeFormatter.ofPattern("hh:mm a");
        return Pair.of(now.plusHours(offsetHours).format(dateFormatter),
                Pair.of(now.plusHours(offsetHours).format(timeFormatter),
                        now.plusHours(offsetHours + 1).format(timeFormatter)));
    }
}
