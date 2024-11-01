package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Pass;
import com.flickmatch.platform.dynamodb.model.Subscription;
import com.flickmatch.platform.dynamodb.model.User;
import com.flickmatch.platform.dynamodb.repository.PassRepository;
import com.flickmatch.platform.dynamodb.repository.SubscriptionRepository;
import com.flickmatch.platform.dynamodb.repository.UserRepository;
import com.flickmatch.platform.graphql.input.CreateSubscriptionInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

public class SubscriptionBuilderTest {
    @Mock
    private SubscriptionRepository subscriptionRepository;

    @Mock
    private PassRepository passRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private SubscriptionBuilder subscriptionBuilder;

    private Pass testPass;
    private User testUser;
    private Subscription testSubscription;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);

        // Sample DynamoDB Pass object
        testPass = new Pass();
        testPass.setPassId("pass-id");
        testPass.setTotalGames(10.0);
        testPass.setTotalDays(30);

        // Sample DynamoDB User object
        testUser = new User();
        testUser.setUserId("user-id");
        testUser.setEmail("test@example.com");
        testUser.setHasActiveSubscription(false);
        testUser.setSubscriptionHistory(Collections.emptyList());

        // Sample DynamoDB Subscription object
        testSubscription = new Subscription();
        testSubscription.setSubscriptionId("subscription-id");
        testSubscription.setPassId("pass-id");
        testSubscription.setUserId("user-id");
        testSubscription.setCreditsLeft(10.0);
        testSubscription.setStatus("Active");
        testSubscription.setExpiryDate(LocalDate.now().plusDays(30).format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
    }

    @Test
    public void testCreateSubscriptionSuccess() {
        // Arrange
        String email = "test@example.com";
        String passId = "pass-id";

        when(passRepository.findByPassId(passId)).thenReturn(Optional.of(testPass));
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(testUser));
        when(subscriptionRepository.save(ArgumentMatchers.any(Subscription.class))).thenReturn(testSubscription);

        // Act
        MutationResult result = subscriptionBuilder.createSubscription(email, passId);

        // Assert
        assertThat(result, notNullValue());
        assertThat(result.isSuccessful(), is(true));
        assertThat(result.getErrorMessage(), nullValue());

        // Verify that the save method was called once on the repositories
        verify(subscriptionRepository, times(1)).save(ArgumentMatchers.any(Subscription.class));
        verify(userRepository, times(1)).save(ArgumentMatchers.any(User.class));

        // Additional assertions to verify if the subscription was correctly set up
        assertThat(testUser.getHasActiveSubscription(), is(true));
        assertThat(testUser.getSubscriptionHistory(), hasItem(testSubscription.getSubscriptionId()));
    }



    @Test
    public void testCreateSubscriptionPassNotFound() {
        // Arrange
        String email = "test@example.com";
        String passId = "invalid-pass-id";

        when(passRepository.findByPassId(passId)).thenReturn(Optional.empty());

        // Act
        MutationResult result = subscriptionBuilder.createSubscription(email, passId);

        // Assert
        assertThat(result, notNullValue());
        assertThat(result.isSuccessful(), is(false));
        assertThat(result.getErrorMessage(), containsString("The pass with the given passId has either been expired or does not exist"));
    }

    @Test
    public void testCreateSubscriptionUserNotFound() {
        // Arrange
        String email = "invalid-email@example.com";
        String passId = "pass-id";

        when(passRepository.findByPassId(passId)).thenReturn(Optional.of(testPass));
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        // Act
        MutationResult result = subscriptionBuilder.createSubscription(email, passId);

        // Assert
        assertThat(result, notNullValue());
        assertThat(result.isSuccessful(), is(false));
        assertThat(result.getErrorMessage(), containsString("The user with the given email does not exist"));
    }

    @Test
    public void testGetActiveSubscriptionSuccess() {
        // Arrange
        String email = "test@example.com";
        testUser.setHasActiveSubscription(true);
        testUser.setSubscriptionHistory(List.of("subscription-id"));

        when(userRepository.findByEmail(email)).thenReturn(Optional.of(testUser));
        when(subscriptionRepository.findById(any())).thenReturn(Optional.of(testSubscription));

        // Act
        com.flickmatch.platform.graphql.type.Subscription result = subscriptionBuilder.getActiveSubscription(email);

        // Assert
        assertThat(result, notNullValue());
        assertThat(result.getSubscriptionId(), is("subscription-id"));
        assertThat(result.getPassId(), is("pass-id"));
        verify(subscriptionRepository, times(1)).findById(any());
    }

    @Test
    public void testGetActiveSubscriptionUserNotFound() {
        // Arrange
        String email = "test@example.com";

        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        // Act
        com.flickmatch.platform.graphql.type.Subscription result = subscriptionBuilder.getActiveSubscription(email);

        // Assert
        assertThat(result, nullValue());
    }

    @Test
    public void testGetActiveSubscriptionNoActiveSubscription() {
        // Arrange
        String email = "test@example.com";
        testUser.setHasActiveSubscription(false);

        when(userRepository.findByEmail(email)).thenReturn(Optional.of(testUser));

        // Act
        com.flickmatch.platform.graphql.type.Subscription result = subscriptionBuilder.getActiveSubscription(email);

        // Assert
        assertThat(result, nullValue());
    }
}
