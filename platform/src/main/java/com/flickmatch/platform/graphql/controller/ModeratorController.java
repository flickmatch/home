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

    //Hack to set Id until DB in integrated
    private static int id = 1;

    @MutationMapping
    public MutationResult registerModerator(@Argument RegisterModeratorInput input) {
        try {
            Moderator moderator = new Moderator(Integer.toString(id),
                    input.getFirstName(),
                    input.getLastName(),
                    input.getContactNumber());
            Moderator.addModerator(moderator);
            id++;
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

    @QueryMapping(name = "moderator")
    public Moderator getModerator(@Argument String moderatorId) {
        return Moderator.getModerator(moderatorId);
    }

    @QueryMapping(name = "moderators")
    public List<Moderator> getModerators() {
        return Moderator.getModerators();
    }


}
