package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.PaymentRequestBuilder;
import com.flickmatch.platform.graphql.builder.RazorPaymentRequestBuilder;
import com.flickmatch.platform.graphql.input.InitiatePaymentInput;
import com.flickmatch.platform.graphql.input.RazorPayInput;
import com.flickmatch.platform.graphql.type.InitiatePaymentOutput;
import com.flickmatch.platform.graphql.type.RazorPayOutput;
import com.flickmatch.platform.proxy.PhonePeProxy;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;

import lombok.extern.log4j.Log4j2;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;


import java.util.UUID;

@Controller
@Log4j2
public class PaymentController {

    @Autowired
    PhonePeProxy phonePeProxy;
    @Autowired
    PaymentRequestBuilder paymentRequestBuilder;
    @Autowired
    EventBuilder eventBuilder;

    @MutationMapping
    public InitiatePaymentOutput initiatePayment(@Argument InitiatePaymentInput input) {
        try {
            String merchantTransactionId = UUID.randomUUID().toString().substring(0,34);
            long eventAmount = eventBuilder.getAmountForEvent(input.getUniqueEventId());
            long amount = eventAmount * input.getPlayerInputList().size();
            String paymentLink = phonePeProxy.initiatePayment(merchantTransactionId, amount, input.getUniqueEventId());
            paymentRequestBuilder.createPaymentRequest(merchantTransactionId,
                    input.getUniqueEventId(), input.getPlayerInputList());
            return InitiatePaymentOutput.builder()
                    .paymentLink(paymentLink)
                    .isInitiated(true)
                    .build();
        } catch (Exception exception) {
            log.error(exception);
            return InitiatePaymentOutput.builder()
                    .isInitiated(false)
                    .build();
        }
    }

    @Value("${razorpay.key.id}")
    private String keyId;

    @Value("${razorpay.key.secret}")
    private String secret;

    @Autowired
    RazorPaymentRequestBuilder razorPaymentRequestBuilder;


    @MutationMapping
    public RazorPayOutput initiateRazorPayment(@Argument RazorPayInput input) {
        try {
            RazorpayClient razorpayClient = new RazorpayClient(keyId, secret);
            JSONObject orderRequest = new JSONObject();
            long eventAmount = eventBuilder.getAmountForEvent(input.getUniqueEventId());
            long amount = eventAmount * input.getPlayerInputList().size();
            String[] parts =input.getUniqueEventId().split("-");
            String cityId = parts[0];
            String currency = eventBuilder.getCurrencyForCity(cityId);
            orderRequest.put("amount", amount);
            orderRequest.put("currency", currency);
            Order order = razorpayClient.orders.create(orderRequest);
            String orderId = order.get("id");
            razorPaymentRequestBuilder.createPaymentRequest(orderId,
                    input.getUniqueEventId(), input.getPlayerInputList());
            return RazorPayOutput.builder().orderId(orderId).isInitiated(true).amount(amount).build();
        } catch (Exception e) {
            log.error("Error creating order: {}", e.getMessage());
            return RazorPayOutput.builder().isInitiated(false)
                    .build();
        }
    }

}
