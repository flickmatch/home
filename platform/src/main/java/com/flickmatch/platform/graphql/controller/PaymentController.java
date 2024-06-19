package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.PaymentRequestBuilder;
import com.flickmatch.platform.graphql.builder.RazorPaymentRequestBuilder;
import com.flickmatch.platform.graphql.input.InitiatePaymentInput;
import com.flickmatch.platform.graphql.input.RazorPayInput;
import com.flickmatch.platform.graphql.type.City;
import com.flickmatch.platform.graphql.type.InitiatePaymentOutput;
import com.flickmatch.platform.graphql.type.RazorPayOutput;
import com.flickmatch.platform.proxy.PhonePeProxy;

import com.flickmatch.platform.proxy.RazorPayProxy;
import com.razorpay.RazorpayClient;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;


import java.time.LocalDate;
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
    @Autowired
    CityController cityController;

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


    @Autowired
    RazorPaymentRequestBuilder razorPaymentRequestBuilder;

    @Autowired
    RazorPayProxy razorPayProxy;


    @MutationMapping
    public RazorPayOutput initiateRazorPayment(@Argument RazorPayInput input) {
        try {
            RazorpayClient razorpayClient = razorPayProxy.getRazorPayClient();
            long eventAmount = eventBuilder.getAmountForEvent(input.getUniqueEventId());
            long amount = eventAmount * input.getPlayerInputList().size();
            String orderId = razorPaymentRequestBuilder.createOrderRequest(razorpayClient, input, eventBuilder,amount);
            LocalDate date = LocalDate.now();
            City city = cityController.getCity(input.getUniqueEventId().split("-")[0]);
            String location = city.getCityName();
            String gameNumber = input.getUniqueEventId().split("-")[4];
            razorPaymentRequestBuilder.createPaymentRequest(orderId,
                    input.getUniqueEventId(), input.getPlayerInputList(),date,location,gameNumber);
            return RazorPayOutput.builder().orderId(orderId).isInitiated(true).amount(amount).build();
        } catch (Exception e) {
            log.error("Error creating order: {}", e.getMessage());
//            log.error("Error creating order: {}", e.getStackTrace());
            return RazorPayOutput.builder().isInitiated(false)
                    .build();
        }
    }

}
