package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.StripePaymentRequest;
import com.flickmatch.platform.dynamodb.repository.StripePaymentRequestRepository;
import com.flickmatch.platform.graphql.input.CreateUserInput;
import com.flickmatch.platform.graphql.input.StripeInput;
import com.flickmatch.platform.graphql.type.StripeOutput;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Log4j2
@Service
public class StripePaymentRequestBuilder {

    @Autowired
    private EventBuilder eventBuilder;

    @Autowired
    private UserBuilder userBuilder;

    @Autowired
    private StripePaymentRequestRepository stripePaymentRequestRepository;

    @Value("${stripe.publishable.key}")
    private String publishableKey;

    @Value("${stripe.secret.key}")
    private String secretKey;

    private String formatDateToString(LocalDate date) {
        return date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }

    public StripeOutput checkoutProducts(StripeInput input, double amount, long quantity, String name, String currency) {
        Stripe.apiKey = secretKey;

        try {
            log.info("Starting Stripe session creation for input: {}", input);

            SessionCreateParams.LineItem.PriceData.ProductData productData =
                    SessionCreateParams.LineItem.PriceData.ProductData.builder()
                            .setName(name)
                            .build();

            BigDecimal decimalAmount = BigDecimal.valueOf(amount).setScale(2, RoundingMode.HALF_UP);
            long amountInCents = decimalAmount.multiply(BigDecimal.valueOf(100)).longValueExact();

            SessionCreateParams.LineItem.PriceData priceData =
                    SessionCreateParams.LineItem.PriceData.builder()
                            .setCurrency(input.getCurrency() == null ? "USD" : input.getCurrency())
                            .setUnitAmount(amountInCents)
                            .setProductData(productData)
                            .build();

            SessionCreateParams.LineItem lineItem = SessionCreateParams.LineItem.builder()
                    .setQuantity(quantity)
                    .setPriceData(priceData)
                    .build();

            SessionCreateParams params = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setSuccessUrl("https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/stripe/success?session_id={CHECKOUT_SESSION_ID}")
                    .setCancelUrl("https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/stripe/cancel")
                    .setBillingAddressCollection(SessionCreateParams.BillingAddressCollection.REQUIRED)
                    .addLineItem(lineItem)
                    .build();

            Session session = Session.create(params);
            log.info("Stripe session created successfully: Session ID = {}", session.getId());

            return StripeOutput.builder()
                    .status("SUCCESS")
                    .message("Payment session created")
                    .sessionId(session.getId())
                    .sessionUrl(session.getUrl())
                    .build();

        } catch (StripeException e) {
            log.error("StripeException occurred while creating payment session: {}", e.getMessage());
            return StripeOutput.builder()
                    .status("FAILED")
                    .message("Stripe session creation failed: " + e.getMessage())
                    .build();
        } catch (Exception e) {
            log.error("Unexpected error during Stripe session creation: {}", e.getMessage());
            return StripeOutput.builder()
                    .status("FAILED")
                    .message("Unexpected error during Stripe session creation")
                    .build();
        }
    }

    public StripePaymentRequest createPaymentRequest(StripeInput input, double amount, long quantity, String name, String currency, String location) {
        LocalDate date = LocalDate.now();
        String dateString = formatDateToString(date);
        String uniqueEventId = input.getUniqueEventId();

        log.info("Creating payment request for event: {}", uniqueEventId);

        AtomicInteger existingPlayerCount = new AtomicInteger(eventBuilder.countPlayersInQueue(uniqueEventId));
        List<Event.PlayerDetails> playerDetailsList = input.getPlayerInputList().stream()
                .map(playerInput -> Event.PlayerDetails.builder()
                        .name(playerInput.getName())
                        .waNumber(playerInput.getWaNumber())
                        .teamColor(playerInput.getTeamColor())
                        .email(playerInput.getEmail())
                        .index(existingPlayerCount.getAndIncrement())
                        .build())
                .collect(Collectors.toList());

        StripeOutput output = checkoutProducts(input, amount, quantity, name, currency);
        if (!"SUCCESS".equals(output.getStatus())) {
            log.error("Failed to create payment session. Aborting payment request creation.");
            return null;
        }

        String email = input.getEmail();
        String phoneNumber = input.getPhoneNumber();
        String pinCode = input.getVenuePinCode();

        try {
            CreateUserInput createUserInput = CreateUserInput.builder()
                    .email(email)
                    .phoneNumber(phoneNumber)
                    .location(location)
                    .pinCode(pinCode)
                    .build();
            userBuilder.createUser(createUserInput);
            log.info("User created or updated successfully: {}", phoneNumber);
        } catch (Exception e) {
            log.error("Error creating or updating user: {}", e.getMessage());
        }

        String gameNumber;
        try {
            gameNumber = input.getUniqueEventId().split("-")[4];
        } catch (Exception e) {
            log.error("Failed to extract game number from eventId: {}", uniqueEventId);
            gameNumber = "UNKNOWN";
        }

        StripePaymentRequest stripePaymentRequest = StripePaymentRequest.builder()
                .sessionId(output.getSessionId())
                .uniqueEventId(uniqueEventId)
                .playerDetailsList(playerDetailsList)
                .status("INITIATED")
                .date(dateString)
                .location(location)
                .gameNumber(gameNumber)
                .email(email)
                .phoneNumber(phoneNumber)
                .redirectUrl(input.getRedirectUrl())
                .pinCode(pinCode)
                .sessionUrl(output.getSessionUrl())
                .build();

        try {
            StripePaymentRequest savedRequest = stripePaymentRequestRepository.save(stripePaymentRequest);
            log.info("Payment request saved successfully: sessionId={}", savedRequest.getSessionId());
            return savedRequest;
        } catch (Exception e) {
            log.error("Failed to save payment request: {}", e.getMessage());
            return null;
        }
    }
}
