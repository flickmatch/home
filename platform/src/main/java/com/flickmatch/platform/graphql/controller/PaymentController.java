package com.flickmatch.platform.graphql.controller;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMappingException;
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
import java.time.format.DateTimeFormatter;
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
            String merchantTransactionId = UUID.randomUUID().toString().substring(0, 34);
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

    public String sanitizeLog(String input) {
        return input.replaceAll("[\r\n]", "");  // Remove line breaks to prevent log injection
    }



    String formatDateToString(LocalDate date) {
        return date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }
    @MutationMapping
    public RazorPayOutput initiateRazorPayment(@Argument RazorPayInput input) {
//        System.out.println(input.getPlayerInputList().get(0).getTeamColor());
        try {
            RazorpayClient razorpayClient = razorPayProxy.getRazorPayClient();
            long eventAmount = eventBuilder.getAmountForEvent(input.getUniqueEventId());
            long amount = eventAmount * input.getPlayerInputList().size();
            String orderId = razorPaymentRequestBuilder.createOrderRequest(razorpayClient, input, eventBuilder, amount);
            LocalDate date = LocalDate.now();
            String dateString = formatDateToString(date);
            City city = cityController.getCity(input.getUniqueEventId().split("-")[0]);
            String location = city.getCityName();
            String gameNumber = input.getUniqueEventId().split("-")[4];
            String email = input.getEmail();
            String phoneNumber = input.getPhoneNumber();
            String redirectUrl = input.getRedirectUrl();

            // Log the phone number before creating the payment request
//            log.info("Phone number to be saved: {}", phoneNumber);
//            log.info("Razorpay OrderId Generated", orderId);
            log.info("Phone number to be saved: {}", sanitizeLog(phoneNumber));
            log.info("Razorpay OrderId Generated", sanitizeLog(orderId));

            razorPaymentRequestBuilder.createPaymentRequest(orderId,
                    input.getUniqueEventId(), input.getPlayerInputList(), dateString, location, gameNumber,email, phoneNumber,redirectUrl);
            return RazorPayOutput.builder().orderId(orderId).isInitiated(true).amount(amount).build();
        } catch (DynamoDBMappingException dbe) {
            log.error("DynamoDB mapping error: {}", dbe.getMessage(), dbe);
        } catch (Exception e) {
            log.error("Error creating order: {}", e.getMessage(), e);
        }
        return RazorPayOutput.builder().isInitiated(false).build();
}

}
