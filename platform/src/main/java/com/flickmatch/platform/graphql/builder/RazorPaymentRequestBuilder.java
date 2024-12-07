package com.flickmatch.platform.graphql.builder;


import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.PaymentRequest;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import com.flickmatch.platform.dynamodb.repository.RazorPaymentRequestRepository;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.input.RazorPayInput;
import com.flickmatch.platform.dynamodb.model.User;
import com.flickmatch.platform.graphql.input.CreateUserInput;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import lombok.extern.log4j.Log4j2;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
public class RazorPaymentRequestBuilder {

    @Autowired
    RazorPaymentRequestRepository razorPaymentRequestRepository;

    @Autowired
    private UserBuilder userBuilder; // Inject UserBuilder

   public String createOrderRequest(RazorpayClient razorpayClient, RazorPayInput input, EventBuilder eventBuilder,long amount) throws RazorpayException {
           JSONObject orderRequest = new JSONObject();
           String[] parts = input.getUniqueEventId().split("-");
           String cityId = parts[0];
           String currency = input.getCurrency();
           orderRequest.put("amount", amount);
           orderRequest.put("currency", currency);
           Order order = razorpayClient.orders.create(orderRequest);
           return order.get("id");
   }
    public RazorPaymentRequest createPaymentRequest(final String orderId,
                                                    final String uniqueEventId,
                                                    final List<PlayerInput> playerInputList,
                                                    final String date,
                                                    final String location,
                                                    final String gameNumber,
                                                    final String email,
                                                    final String phoneNumber,
                                                    final String redirectUrl) {

        List<Event.PlayerDetails> playerDetailsList = playerInputList.stream()
                .map(playerInput -> Event.PlayerDetails.builder()
                        .name(playerInput.getName())
                        .waNumber(playerInput.getWaNumber())
                        .teamColor(playerInput.getTeamColor())
                        .build())
                .collect(Collectors.toList());

        try {
        // Create or update the user with the provided phone number
        CreateUserInput createUserInput = CreateUserInput.builder()
                .email(email) // Assuming you have the email from the payment request
                .phoneNumber(phoneNumber)
                .location(location)
                .build();
        userBuilder.createUser(createUserInput);
        } catch (Exception e) {
            log.error("Error creating user: " + e.getMessage());
        }

        // System.out.println(orderId + " " + uniqueEventId + " " + " " + date + " " + location + " " + gameNumber + " " +email);
        RazorPaymentRequest razorPaymentRequest = RazorPaymentRequest.builder()
                .orderId(orderId)
                .uniqueEventId(uniqueEventId)
                .playerDetailsList(playerDetailsList)
                .status("INITIATED")
                .date(date)
                .location(location)
                .gameNumber(gameNumber)
                .email(email)
                .phoneNumber(phoneNumber)
                .redirectUrl(redirectUrl)
                .build();
        return razorPaymentRequestRepository.save(razorPaymentRequest);
    }

    public RazorPaymentRequest updatePaymentRequestStatus(final RazorPaymentRequest razorPaymentRequest,final String paymentId,
                                                     final boolean isSuccessful) {
        if (isSuccessful) {
            razorPaymentRequest.setStatus("PAID");
            razorPaymentRequest.setPaymentId(paymentId);
        } else {
            razorPaymentRequest.setStatus("FAILED");
        }
        return razorPaymentRequestRepository.save(razorPaymentRequest);
    }

    public RazorPaymentRequest getPaymentRequest(final String orderId) {
        Optional<RazorPaymentRequest> razorPaymentRequest = razorPaymentRequestRepository.findById(orderId);
        return razorPaymentRequest.orElseThrow(() -> new IllegalArgumentException("Invalid input"));
    }

}
