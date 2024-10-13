package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Pass;
import com.flickmatch.platform.dynamodb.model.Subscription;
import com.flickmatch.platform.dynamodb.model.User;
import com.flickmatch.platform.dynamodb.repository.PassRepository;
import com.flickmatch.platform.dynamodb.repository.SubscriptionRepository;
import com.flickmatch.platform.dynamodb.repository.UserRepository;
import com.flickmatch.platform.graphql.input.CreateSubscriptionInput;
import com.flickmatch.platform.graphql.input.UpdateSubscriptionInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Log4j2
public class SubscriptionBuilder {
    @Autowired
    SubscriptionRepository subscriptionRepository;

    @Autowired
    PassRepository passRepository;

    @Autowired
    UserRepository userRepository;

    public MutationResult createSubscription(String email, String passId) {
        try {
            Optional<Pass> passOpt = passRepository.findByPassId(passId);
            if(passOpt.isEmpty()) {
                throw new Exception("The pass with the given passId has either been expired or does not exist");
            }
            Pass pass = passOpt.get();
            Double gamesLeft=pass.getTotalGames();
            Integer totalDays=pass.getTotalDays();
            LocalDate today = LocalDate.now();
            LocalDate expiry = today.plusDays(totalDays);
            // Define a formatter
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

            // Convert the LocalDate to a String
            String expiryDate = expiry.format(formatter);

            Optional<User> userOpt = userRepository.findByEmail(email);
            if (userOpt.isEmpty()) {
                throw new Exception("The user with the given email does not exist");
            }

            User user = userOpt.get();
//            if(user.getHasActiveSubscription()!=false) {
//                throw new Exception("The user already has an active subscription");
//            }
            if (Boolean.TRUE.equals(user.getHasActiveSubscription())) {
                throw new Exception("The user already has an active subscription");
            }

            Subscription subscription = Subscription.builder()
                    .passId(passId)
                    .subscriptionKey(Subscription.SubscriptionKey.builder()
                            .userId(user.getUserId())
                            .subscriptionId(null)
                            .build())
                    .gamesLeft(gamesLeft)
                    .status("Active")
                    .expiryDate(expiryDate)
                    .cityId(pass.getCityId())
                    .build();

            log.error(subscription.toString());


            // Save the Subscription to the repository
            Subscription savedSubcription = subscriptionRepository.save(subscription);

            user.setHasActiveSubscription(true);
//            List<String> subscriptionHistory = user.getSubscriptionHistory();
//
//            subscriptionHistory.add(savedSubcription.getSubscriptionId());
//
//            user.setSubscriptionHistory(subscriptionHistory);
            List<String> subscriptionHistory = user.getSubscriptionHistory() != null
                    ? new ArrayList<>(user.getSubscriptionHistory())
                    : new ArrayList<>();

// Add the new subscription ID to the history
            subscriptionHistory.add(savedSubcription.getSubscriptionId());

// Update the user's subscription history
            user.setSubscriptionHistory(subscriptionHistory);
            userRepository.save(user);



            // Return a successful result
            return MutationResult.builder()
                    .isSuccessful(true)
                    .build();
        } catch (Exception e) {
            log.error("Exception occurred:", e);
            log.error("Error creating subscription: ", e.getLocalizedMessage());
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage(e.getMessage())
                    .build();
        }
    }

    public com.flickmatch.platform.graphql.type.Subscription getActiveSubscription(String email) {
        try {
            Optional<User> userOpt = userRepository.findByEmail(email);
            if (userOpt.isEmpty()) {
                throw new Exception("The user with the given email does not exist");
            }
            User user = userOpt.get();
            if (!user.getHasActiveSubscription()) {
                throw new Exception("The user does not have an active subscription");
            }
            List<String> subscriptionHistory = user.getSubscriptionHistory();
            if (subscriptionHistory.isEmpty()) {
                throw new Exception("The user does not have an active subscription");
            }
            String activeSubscriptionId = subscriptionHistory.get(subscriptionHistory.size() - 1);
            Subscription.SubscriptionKey subscriptionKey = Subscription.SubscriptionKey.builder()
                    .userId(user.getUserId())
                    .subscriptionId(activeSubscriptionId)
                    .build();

            com.flickmatch.platform.graphql.type.Subscription subscriptionOpt = subscriptionRepository.findById(subscriptionKey).stream().map(this::mapEventToGQLType).collect(Collectors.toList()).get(0);
            if (subscriptionOpt == null) {
                throw new Exception("The active subscription does not exist");
            }

            return subscriptionOpt;
        } catch (Exception e) {
            log.error("Error getting active subscription: ", e);
            return null;
        }
    }

    com.flickmatch.platform.graphql.type.Subscription mapEventToGQLType(Subscription subs) {
//        System.out.println(subs.toString());

        return com.flickmatch.platform.graphql.type.Subscription.builder()
                .subscriptionId(subs.getSubscriptionId())
                .passId(subs.getPassId())
                .userId(subs.getUserId())
                .expiryDate(subs.getExpiryDate())
                .gamesLeft(subs.getGamesLeft())
                .status(subs.getStatus())
                .cityId(subs.getCityId())
                .build();
    }

    public MutationResult updateSubscription(String subscriptionId,Double credits) {
        try {
            Subscription subs = subscriptionRepository.findBySubscriptionId(subscriptionId).get();
            String passId = subs.getPassId();
            Optional<Pass> passOpt = passRepository.findByPassId(passId);
            User user = userRepository.findById(subs.getUserId()).get();
            if (passOpt.isEmpty()) {
                throw new Exception("The pass does not exist");
            }
            String type = passOpt.get().getPassType();
            if(type.equals("LimitedDays")) {
                LocalDate today = LocalDate.now();
                String expiryDateString = subs.getExpiryDate();
                // Define the formatter for the date string
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

                // Convert the string to a LocalDate
                LocalDate expiryDate = LocalDate.parse(expiryDateString, formatter);
                if (today.isAfter(expiryDate)) {
                    subs.setStatus("Expired");
                    subs.setGamesLeft(0.0);
                    user.setHasActiveSubscription(false);
                    throw new Exception("The subscription has already expired! Please try again refreshing the page.");
                }
            }
            else if(type.equals("LimitedGames")) {
                if(credits>subs.getGamesLeft()) {
                    throw new Exception("Game credits are less than the balance. Please pay and book your spot.");
                }
                Double totalGamesLeft = subs.getGamesLeft()-credits;
//                System.out.println("TotalGamesLeft: "+totalGamesLeft);
                subs.setGamesLeft(totalGamesLeft);
                if(totalGamesLeft<=.5) {
                    subs.setStatus("Expired");
                    subs.setExpiryDate(LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
                    user.setHasActiveSubscription(false);
                }
            }
            else {
                throw new Exception("Invalid pass type");
            }
//            System.out.println(subs.getGamesLeft());
            subscriptionRepository.save(subs);
            userRepository.save(user);

            return MutationResult.builder()
                    .isSuccessful(true)
                    .build();
        } catch (Exception e) {
            log.error("Exception occurred:", e);
            log.error("Error finding the pass with the given passId: ", e.getLocalizedMessage());
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage(e.getMessage())
                    .build();
        }

    }



}
