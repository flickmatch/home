package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.PaymentRequest;
import com.flickmatch.platform.dynamodb.repository.PaymentRequestRepository;
import com.flickmatch.platform.graphql.input.PlayerInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaymentRequestBuilder {

    @Autowired
    private PaymentRequestRepository paymentRequestRepository;

    public PaymentRequest createPaymentRequest(final String merchantTransactionId,
                                               final String uniqueEventId,
                                               final List<PlayerInput> playerInputList) {
        List<Event.PlayerDetails> playerDetailsList = playerInputList.stream()
                .map(playerInput -> Event.PlayerDetails.builder()
                        .name(playerInput.getName())
                        .waNumber(playerInput.getWaNumber())
                        .build())
                .collect(Collectors.toList());
        PaymentRequest paymentRequest = PaymentRequest.builder()
                .merchantTransactionId(merchantTransactionId)
                .uniqueEventId(uniqueEventId)
                .playerDetailsList(playerDetailsList)
                .status("INITIATED")
                .build();
        return paymentRequestRepository.save(paymentRequest);
    }
}
