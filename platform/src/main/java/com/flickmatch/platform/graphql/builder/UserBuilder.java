package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.User;
import com.flickmatch.platform.dynamodb.repository.UserRepository;
import com.flickmatch.platform.graphql.input.CreateUserInput;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Log4j2
@Service

public class UserBuilder {
    private final UserRepository userRepository;

    public UserBuilder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(CreateUserInput input) {
//        Checking if the user already exists
        Optional<User> existingUserOptional = userRepository.findByEmail(input.getEmail());
        User user;

        if(existingUserOptional.isPresent()) {
            // User already exists, update the phone number
            user = existingUserOptional.get();
            user.setPhoneNumber(input.getPhoneNumber());
            log.info("User already exists, updating phone number for user: {}", user);
            return userRepository.save(user);
        } else {
            // Create a new User object
            user = new User();
            user.setEmail(input.getEmail());
            user.setName(input.getName());
            user.setPhoneNumber(input.getPhoneNumber());
            log.info("Creating a new user: {}", user);
        }

        try {
            // Save the user (new or updated) to the repository
            userRepository.save(user);
            log.info("User saved successfully: {}", user);
            return user;
        } catch (Exception e) {
            log.error("Error saving user: {}", e.getMessage());
            throw e;
        }

    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}