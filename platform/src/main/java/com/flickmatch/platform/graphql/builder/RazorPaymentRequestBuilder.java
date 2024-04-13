package com.flickmatch.platform.graphql.builder;


import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.PaymentRequest;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import com.flickmatch.platform.dynamodb.repository.RazorPaymentRequestRepository;
import com.flickmatch.platform.graphql.input.PlayerInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RazorPaymentRequestBuilder {
   @Autowired
    RazorPaymentRequestRepository razorPaymentRequestRepository;
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
