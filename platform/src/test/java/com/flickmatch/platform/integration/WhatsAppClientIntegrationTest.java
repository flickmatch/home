package com.flickmatch.platform.integration;

import com.flickmatch.platform.graphql.input.PlayerInput;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;

import java.io.File;
import java.io.FileNotFoundException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@TestPropertySource(locations="classpath:application-test.properties")
public class WhatsAppClientIntegrationTest {

    @Value("${application.local.endpoint}")
    private String url;

    @Test
    void testEventIsCreated_whenMessageReceivedFirstTime() throws FileNotFoundException, JSONException {

        var query = readFileFromResourceFolder("query/updatePlayerList.graphql");
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
        assertThat(
                responseBody.getJSONObject("data").getJSONObject("updatePlayerList").getBoolean("isSuccessful"),
                is(true));
    }

    private String readFileFromResourceFolder(String fileName) throws FileNotFoundException {
        String result = "";
        ClassLoader classLoader = getClass().getClassLoader();
        File file = new File(classLoader.getResource(fileName).getFile());
        try (Scanner scanner = new Scanner(file)) {
            while (scanner.hasNextLine()) {
                result += scanner.nextLine();
            }
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
