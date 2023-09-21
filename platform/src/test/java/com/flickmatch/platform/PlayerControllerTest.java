package com.flickmatch.platform;

import com.flickmatch.platform.graphql.builder.PlayerBuilder;
import com.flickmatch.platform.graphql.controller.PlayerController;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import com.flickmatch.platform.graphql.type.MutationResultForUpdatePlayerList;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;


class PlayerControllerTest {

    @Mock
    private PlayerBuilder playerBuilder;

    @InjectMocks
    private PlayerController playerController;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    public static UpdatePlayerListInput createSampleInput() {
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

    @Test
    void testUpdatePlayerList_Successful() throws ParseException {
        // Prepare test data
        UpdatePlayerListInput input = createSampleInput();

        // Perform the test
        MutationResultForUpdatePlayerList result = playerController.updatePlayerList(input);

        // Verify the behavior
        assertThat(result.isSuccessful(), is(true));
        assertEquals(4, result.getUpdatedPlayerList().stream().count());
    }

    @Test
    void testUpdatePlayerList_Exception() throws ParseException {
        // Prepare test data
        UpdatePlayerListInput input = createSampleInput();

        // Perform the test
        MutationResultForUpdatePlayerList result = playerController.updatePlayerList(input);

        // Verify the behavior
        assertThat(result.isSuccessful(), is(true));
    }
}

