package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.PlayerBuilder;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@Log4j2
public class PlayerController {

    @Autowired
    PlayerBuilder playerBuilder;

    @MutationMapping
    public MutationResult updatePlayerList(@Argument UpdatePlayerListInput input) {
        try {
            playerBuilder.updatePlayerList(input);
        } catch (Exception exception) {
            exception.printStackTrace();
            log.error(exception.getMessage());
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage(exception.getMessage())
                    .build();
        }
        return MutationResult.builder()
                .isSuccessful(true)
                .build();
    }
}
