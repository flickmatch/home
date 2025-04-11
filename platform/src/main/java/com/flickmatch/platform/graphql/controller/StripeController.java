package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.StripePaymentRequestBuilder;
import com.flickmatch.platform.graphql.input.StripeInput;
import com.flickmatch.platform.graphql.type.StripeOutput;
import com.stripe.Stripe;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@Log4j2
public class StripeController {
    @Autowired
    private  StripePaymentRequestBuilder stripePaymentBuilder;

    @MutationMapping
    public StripeOutput checkoutProducts(@Argument StripeInput input) {
        try {
            return stripePaymentBuilder.checkoutProducts(input);
        }
        catch (Exception e) {
            log.error("Error creating checkout session :{}",e.getMessage(),e);
        }
        return StripeOutput.builder().build();
    }
}
