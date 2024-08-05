package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.User;
import com.flickmatch.platform.dynamodb.repository.UserRepository;
import com.flickmatch.platform.graphql.input.CreateUserInput;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        newUser.setHasActiveSubscription(false);
        newUser.setSubscriptionHistory(new ArrayList<>());


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

    public void createUserSubscription(String email,String passId,String subscriptionId) {
        try {
            // Find the existing user by email
            Optional<User> existingUserOptional = userRepository.findByEmail(email);

            if (existingUserOptional.isEmpty()) {
                log.warn("User with email {} does not exist", email);
                throw new Exception("User does not exist");
            }

            // Get the existing user
            User existingUser = existingUserOptional.get();

            // Add the new subscription ID to the subscription history
            List<String> subscriptions = existingUser.getSubscriptionHistory();
            if (subscriptions != null) {
                subscriptions.add(subscriptionId);
            } else {
                subscriptions = new ArrayList<>();
                subscriptions.add(subscriptionId);
                existingUser.setSubscriptionHistory(subscriptions);
            }

            // Save the updated user back to the repository
            userRepository.save(existingUser);

            log.info("Added subscription {} to user {}", subscriptionId, email);

        } catch (Exception e) {
            log.error("Error adding subscription to user with email {}: {}", email, e.getMessage());
            throw new RuntimeException("Failed to add subscription: " + e.getMessage(), e);
        }

    }

    public boolean hasActiveSubscription(String email) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return false;
        }
        User user = userOpt.get();
        return user.getHasActiveSubscription();
    }



}
