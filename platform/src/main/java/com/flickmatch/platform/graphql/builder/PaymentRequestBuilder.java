package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.PaymentRequest;
import com.flickmatch.platform.dynamodb.repository.PaymentRequestRepository;
import com.flickmatch.platform.graphql.input.PlayerInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.log4j.Log4j2;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
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
                        .email(playerInput.getEmail())
                        .teamColor(playerInput.getTeamColor())
                        .build())
                .collect(Collectors.toList());
        log.info("Razorpay Merchant Transaction Id", merchantTransactionId);
        log.info("Players Joined", playerInputList);
        PaymentRequest paymentRequest = PaymentRequest.builder()
                .merchantTransactionId(merchantTransactionId)
                .uniqueEventId(uniqueEventId)
                .playerDetailsList(playerDetailsList)
                .status("INITIATED")
                .build();
        return paymentRequestRepository.save(paymentRequest);
    }

    public PaymentRequest updatePaymentRequestStatus(final PaymentRequest paymentRequest,
                                                     final boolean isSuccessful) {
        if (isSuccessful) {
            paymentRequest.setStatus("PAID");
        } else {
            paymentRequest.setStatus("FAILED");
        }
        return paymentRequestRepository.save(paymentRequest);
    }

    public PaymentRequest getPaymentRequest(final String merchantTransactionId) {
        Optional<PaymentRequest> paymentRequest = paymentRequestRepository.findById(merchantTransactionId);
        return paymentRequest.orElseThrow(() -> new IllegalArgumentException("Invalid input"));
    }
}
