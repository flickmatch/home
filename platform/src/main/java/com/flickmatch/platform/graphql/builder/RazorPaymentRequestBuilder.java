package com.flickmatch.platform.graphql.builder;


import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.PaymentRequest;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import com.flickmatch.platform.dynamodb.repository.RazorPaymentRequestRepository;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.input.RazorPayInput;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RazorPaymentRequestBuilder {
   @Autowired
    RazorPaymentRequestRepository razorPaymentRequestRepository;

   public String createOrderRequest(RazorpayClient razorpayClient, RazorPayInput input, EventBuilder eventBuilder,long amount) throws RazorpayException {
           JSONObject orderRequest = new JSONObject();
           String[] parts =input.getUniqueEventId().split("-");
           String cityId = parts[0];
           String currency = eventBuilder.getCurrencyForCity(cityId);
           orderRequest.put("amount", amount);
           orderRequest.put("currency", currency);
           Order order = razorpayClient.orders.create(orderRequest);
           return order.get("id");
   }
    public RazorPaymentRequest createPaymentRequest(final String orderId,
                                                    final String uniqueEventId,
                                                    final List<PlayerInput> playerInputList) {
        List<Event.PlayerDetails> playerDetailsList = playerInputList.stream()
                .map(playerInput -> Event.PlayerDetails.builder()
                        .name(playerInput.getName())
                        .waNumber(playerInput.getWaNumber())
                        .build())
                .collect(Collectors.toList());
        RazorPaymentRequest razorPaymentRequest = RazorPaymentRequest.builder()
                .orderId(orderId)
                .uniqueEventId(uniqueEventId)
                .playerDetailsList(playerDetailsList)
                .status("INITIATED")
                .build();
        return razorPaymentRequestRepository.save(razorPaymentRequest);
    }

    public RazorPaymentRequest updatePaymentRequestStatus(final RazorPaymentRequest razorPaymentRequest,
                                                     final boolean isSuccessful) {
        if (isSuccessful) {
            razorPaymentRequest.setStatus("PAID");
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
