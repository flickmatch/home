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
    private  UserRepository userRepository;

    public UserBuilder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(CreateUserInput input) {
//        Checking if the user already exists
        Optional<User> existingUser = userRepository.findByEmail(input.getEmail());
        if(existingUser.isPresent()) {
            return existingUser.get();
        }
        // Create a new User object
        User newUser = new User();
        newUser.setEmail(input.getEmail());
        newUser.setName(input.getName());
        newUser.setPhoneNumber(input.getPhoneNumber());


        try {
            // Save the new user to the repository
            userRepository.save(newUser);
            log.info("User created successfully: {}", newUser);
            return newUser;
        } catch (Exception e) {
            log.error("Error creating user: {}", e.getMessage());
            throw e;
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }






}
