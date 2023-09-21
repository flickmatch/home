package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.PlayerBuilder;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import com.flickmatch.platform.graphql.type.MutationResultForUpdatePlayerList;
import com.flickmatch.platform.graphql.type.Player;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;


@Controller
@Log4j2
public class PlayerController {

    @Autowired
    PlayerBuilder playerBuilder;

    @MutationMapping
    public MutationResultForUpdatePlayerList updatePlayerList(@Argument UpdatePlayerListInput input) {
        List<Player> allPlayers = new ArrayList<>();
        try {
            playerBuilder.updatePlayerList(input);
            List<Player> reservedPlayersList = convertPlayerInputListToPlayerList(input.getReservedPlayersList());
            List<Player> waitListPlayers = convertPlayerInputListToPlayerList(input.getWaitListPlayers());
            allPlayers.addAll(reservedPlayersList);
            allPlayers.addAll(waitListPlayers);
            return MutationResultForUpdatePlayerList.builder()
                    .isSuccessful(true)
                    .updatedPlayerList(allPlayers)
                    .build();
        } catch (Exception exception) {
            exception.printStackTrace();
            log.error(exception.getMessage());
            allPlayers.clear();
            return MutationResultForUpdatePlayerList.builder()
                    .isSuccessful(false)
                    .errorMessage(exception.getMessage())
                    .updatedPlayerList(allPlayers)
                    .build();
        }
    }
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
