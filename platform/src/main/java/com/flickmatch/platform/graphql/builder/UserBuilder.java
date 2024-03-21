package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.User;
import com.flickmatch.platform.dynamodb.repository.UserRepository;
import com.flickmatch.platform.graphql.input.CreateUserInput;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Log4j2
@Service

public class UserBuilder {
    private  UserRepository userRepository;

    public UserBuilder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(CreateUserInput input) {
        // Create a new User object
        User newUser = new User();
        newUser.setEmail(input.getEmail());
        newUser.setName(input.getName());
        newUser.setPhoneNumber(input.getPhoneNumber());
//        newUser.setUserId("1");
//        System.out.println(newUser.toString());

        try {
            // Save the new user to the repository
            userRepository.save(newUser);
            log.info("User created successfully: {}", newUser);
            return newUser;
        } catch (Exception e) {
            log.error("Error creating user: {}", e.getMessage());
            return null;
        }
    }


}
