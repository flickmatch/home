package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.input.InitiatePaymentInput;
import com.flickmatch.platform.graphql.type.InitiatePaymentOutput;
import com.flickmatch.platform.proxy.PhonePeProxy;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@Log4j2
public class PaymentController {

    @Autowired
    PhonePeProxy phonePeProxy;

    @MutationMapping
    public InitiatePaymentOutput initiatePayment(@Argument InitiatePaymentInput input) {
        String paymentLink = "https://example.com/payment/link";
        try {
            paymentLink = phonePeProxy.initiatePayment();
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return InitiatePaymentOutput.builder()
                .paymentLink(paymentLink)
                .build();
    }
}
