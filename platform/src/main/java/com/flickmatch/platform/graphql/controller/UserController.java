package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.UserBuilder;
import com.flickmatch.platform.graphql.input.CreateUserInput;
import com.flickmatch.platform.graphql.type.UserResult;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@Log4j2
public class UserController {

    @Autowired
    private UserBuilder userBuilder;

    @MutationMapping
    public UserResult createUser(@Argument CreateUserInput input) {
        try {
            userBuilder.createUser(input);
        } catch (Exception exception) {
            log.error(exception.getMessage());
            return UserResult.builder()
                    .isSuccessful(false)
                    .build();
        }
        return UserResult.builder()
                .isSuccessful(true)
                .build();
    }
}
