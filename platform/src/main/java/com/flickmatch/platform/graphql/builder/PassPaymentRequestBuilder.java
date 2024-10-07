package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.PassPaymentRequest;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import com.flickmatch.platform.dynamodb.repository.PassPaymentRequestRepository;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.input.RazorPayInput;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import lombok.extern.log4j.Log4j2;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
public class PassPaymentRequestBuilder {
    @Autowired
    PassPaymentRequestRepository passPaymentRequestRepository;


    public String createOrderRequest(RazorpayClient razorpayClient, String currency, Double amount) throws RazorpayException {
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount);
        orderRequest.put("currency", currency);
        Order order = razorpayClient.orders.create(orderRequest);
        return order.get("id");
    }

    public PassPaymentRequest createPaymentRequest(final String orderId,
                                                   final String location,
                                                   final String userId,
                                                   final String passId,
                                                   final Double amount,
                                                    final String email
    ) {

        PassPaymentRequest paymentRequest = PassPaymentRequest.builder()
                .orderId(orderId)
                .amount(amount)
                .location(location)
                .userId(userId)
                .status("INITIATED")
                .passId(passId)
                .email(email)
                .build();
        return passPaymentRequestRepository.save(paymentRequest);
    }

    public PassPaymentRequest updatePaymentRequestStatus(final PassPaymentRequest passPaymentRequest,final String paymentId,
                                                         final boolean isSuccessful) {
        if (isSuccessful) {
            passPaymentRequest.setStatus("PAID");
            passPaymentRequest.setPaymentId(paymentId);
        } else {
            passPaymentRequest.setStatus("FAILED");
        }
        return passPaymentRequestRepository.save(passPaymentRequest);
    }

    public PassPaymentRequest getPaymentRequest(final String orderId) {
        Optional<PassPaymentRequest> passPaymentRequest = passPaymentRequestRepository.findById(orderId);
        return passPaymentRequest.orElseThrow(() -> new IllegalArgumentException("Invalid input"));
    }

}
