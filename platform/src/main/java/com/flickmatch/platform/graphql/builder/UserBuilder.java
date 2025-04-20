package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.User;
import com.flickmatch.platform.dynamodb.repository.UserRepository;
import com.flickmatch.platform.graphql.input.CreatePlayerStatsInput;
import com.flickmatch.platform.graphql.input.CreateUserInput;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        String location = input.getLocation();
        String pinCode = input.getPinCode();
        Optional<User> existingUserOptional = userRepository.findByEmail(input.getEmail());
        User user;

        if(existingUserOptional.isPresent()) {
            // User already exists, update the phone number
            user = existingUserOptional.get();
            user.setPhoneNumber(input.getPhoneNumber());
            List<String> citiesHistory = user.getCitiesHistory();
            List<String> pinCodeHistory = user.getUserPinCodes();
            if(citiesHistory!=null) {
                if (!citiesHistory.contains(location)) {
                    citiesHistory.add(location);
                }
            } else {
                citiesHistory = new ArrayList<>();
                citiesHistory.add(location);
            }
            if(pinCodeHistory!=null) {
//                log.info("Location:",location);
                if (!pinCodeHistory.contains(pinCode)) {
                    pinCodeHistory.add(pinCode);
                }
            } else {
//                log.info("Location:",location);
                pinCodeHistory = new ArrayList<>();
                pinCodeHistory.add(pinCode);
            }
            user.setCitiesHistory(citiesHistory);
            user.setUserPinCodes(pinCodeHistory);
            log.info("User already exists, updating phone number for user: {}", user);
            return userRepository.save(user);
        } else {
            List<String>citiesHistory = new ArrayList<>();
            List<String>pinCodeHistory = new ArrayList<>();
//            citiesHistory.add(location);
            user = new User();
            user.setEmail(input.getEmail());
            user.setName(input.getName());
            user.setPhoneNumber(input.getPhoneNumber());
            user.setHasActiveSubscription(false);
            user.setSubscriptionHistory(new ArrayList<>());
            user.setCitiesHistory(citiesHistory);
            user.setUserPinCodes(pinCodeHistory);
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
        if(user.getHasActiveSubscription()==null) {
            return false;
        }
        return user.getHasActiveSubscription();
    }


    public void createPlayerStats(CreatePlayerStatsInput input) {
        Optional<User> userOpt = userRepository.findByEmail(input.getEmail());
        if (userOpt.isEmpty()) {
            return;
        }
        User user = userOpt.get();
        User.PlayerStats playerStats = new User.PlayerStats();
        playerStats.setWins(input.getWins());
        user.setPlayerStats(playerStats);
        userRepository.save(user);
    }

    public com.flickmatch.platform.graphql.type.User getUserStats(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        try {
            if (userOptional.isPresent()) {
                User user = userOptional.get();

                return com.flickmatch.platform.graphql.type.User.builder()
                        .email(user.getEmail())
                        .wins(user.getPlayerStats().getWins())
                        .build();
            } else {
                log.info("No user found for the given email Id: " + email);
                return null;
            }
        }
        catch (Exception e){
            log.error("Error fetching user by email Id: " + email, e);
            return null;
        }
    }
}
