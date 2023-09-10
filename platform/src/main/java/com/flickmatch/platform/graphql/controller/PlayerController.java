package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.graphql.builder.PlayerBuilder;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import com.flickmatch.platform.graphql.type.MutationResultForUpdatePlayerList;
import com.flickmatch.platform.graphql.type.Player;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Controller
@Log4j2
public class PlayerController {

    EventRepository eventRepository;

    public PlayerController(EventRepository eventRepository) {
        super();
        this.eventRepository = eventRepository;
    }

    @Autowired
    PlayerBuilder playerBuilder;

    @MutationMapping
    public MutationResultForUpdatePlayerList updatePlayerList(@Argument UpdatePlayerListInput input) {
        List<PlayerInput> reservedPlayersInputList;
        List<Player> reservedPlayersList = new ArrayList<>(); // Initialize the list of Player objects
        try {
            reservedPlayersList = convertPlayerInputListToPlayerList(input.getReservedPlayersList());
            return MutationResultForUpdatePlayerList.builder()
                    .isSuccessful(true)
                    .reservedPlayersList(reservedPlayersList)
                    .build();
        } catch (Exception exception) {
            exception.printStackTrace();
            log.error(exception.getMessage());
            return MutationResultForUpdatePlayerList.builder()
                    .isSuccessful(false)
                    .errorMessage(exception.getMessage())
                    .reservedPlayersList(reservedPlayersList)
                    .build();
        }
    }

    // Define a method to convert PlayerInput list to Player list
    private List<Player> convertPlayerInputListToPlayerList(List<PlayerInput> playerInputList) {
        List<Player> playerList = new ArrayList<>();

        // Implement your logic to convert PlayerInput to Player objects
        for (PlayerInput playerInput : playerInputList) {
            Player player = Player.builder()
                    .displayName(playerInput.getName())
                    .build();
            playerList.add(player);
        }

        return playerList;
    }

}
    