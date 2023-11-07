package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.input.InitiatePaymentInput;
import com.flickmatch.platform.graphql.type.InitiatePaymentOutput;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentController {

    @PostMapping
    public InitiatePaymentOutput initiatePayment(@RequestBody InitiatePaymentInput input) {
        String paymentLink = "https://example.com/payment/link";
        InitiatePaymentOutput output = new InitiatePaymentOutput(paymentLink);
        output.setPaymentLink(paymentLink);
        return output;
    }
}
