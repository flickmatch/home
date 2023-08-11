package com.flickmatch.platform.integration;

import com.flickmatch.platform.graphql.input.PlayerInput;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.util.Pair;
import org.springframework.test.context.TestPropertySource;

import java.io.FileNotFoundException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import static com.flickmatch.platform.integration.IntegrationTestUtil.callGraphQl;
import static com.flickmatch.platform.integration.IntegrationTestUtil.readFileFromResourceFolder;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@TestPropertySource(locations="classpath:application-test.properties")
public class UpdatePlayerListIntegrationTest {

    @Value("${application.local.endpoint}")
    private String url;

    @Test
    void testEventIsCreated_whenMessageReceivedFirstTime() throws FileNotFoundException, JSONException {

        var query = readFileFromResourceFolder("query/updatePlayerList.graphql");
        var variables = buildInputForUpdatePlayerListMutation();
        var responseBody = callGraphQl(query, variables, url);
        assertThat(
                responseBody.getJSONObject("data").getJSONObject("updatePlayerList").getBoolean("isSuccessful"),
                is(true));
    }

    @Test
    void testPlayerIsPersisted_whenPlayerJoinsEventUsingWebsite() throws FileNotFoundException, JSONException {
        //This tests validates if player joining from website are not overridden by UpdatePlayer mutation
        var query = readFileFromResourceFolder("query/updatePlayerList.graphql");
        var variables = buildInputForUpdatePlayerListMutation();
        var responseBody = callGraphQl(query, variables, url);
        assertThat(
                responseBody.getJSONObject("data").getJSONObject("updatePlayerList").getBoolean("isSuccessful"),
                is(true));
        //Todo: Add logic
    }

    private Map<String, Object> buildInputForUpdatePlayerListMutation() {
        var reservedPlayersList = List.of(buildPlayer("Player1"), buildPlayer("Player2"));
        var waitListPlayers = List.of();
        var dateTimeInput = getDateTimeInput();
        return Map.of("startTime", dateTimeInput.getSecond().getFirst(),
                "endTime", dateTimeInput.getSecond().getSecond(),
                "date", dateTimeInput.getFirst(),
                "reservedPlayersList", reservedPlayersList,
                "waitListPlayers", waitListPlayers);
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
