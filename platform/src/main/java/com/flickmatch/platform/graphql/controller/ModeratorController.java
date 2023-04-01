package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.input.RegisterModeratorInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import com.flickmatch.platform.records.Moderator;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ModeratorController {

    @MutationMapping
    public MutationResult registerModerator(@Argument RegisterModeratorInput input) {
        try {
            //ToDo
        } catch (Exception ex) {
            return MutationResult.builder()
                    .errorMessage("Sample Error message")
                    .isSuccessful(false)
                    .build();
        }
        return MutationResult.builder()
                .isSuccessful(true)
                .build();
    }

}
