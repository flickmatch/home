package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.PaymentRequestBuilder;
import com.flickmatch.platform.graphql.input.InitiatePaymentInput;
import com.flickmatch.platform.graphql.type.InitiatePaymentOutput;
import com.flickmatch.platform.proxy.PhonePeProxy;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
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
}
