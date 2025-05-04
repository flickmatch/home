package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.dynamodb.model.StripePaymentRequest;
import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.StripePaymentRequestBuilder;
import com.flickmatch.platform.graphql.input.StripeCheckoutInput;
import com.flickmatch.platform.graphql.input.StripeInput;
import com.flickmatch.platform.graphql.type.City;
import com.flickmatch.platform.graphql.type.Event;
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
    StripePaymentRequestBuilder stripePaymentBuilder;

    @Autowired
    EventBuilder eventBuilder;

    @Autowired
    CityController cityController;

    @MutationMapping
    public StripePaymentRequest checkoutProducts(@Argument StripeInput input) {
        Event event = eventBuilder.getEventById(input.getUniqueEventId());
        double amount=event.getCharges();
        long quantity=input.getPlayerInputList().size();
        String name=event.getUniqueEventId();
        String currency=input.getCurrency();
        City city = cityController.getCity(input.getUniqueEventId().split("-")[0]);
        String location = city.getCityName();


        try {
            return stripePaymentBuilder.createPaymentRequest(input,amount,quantity,name,currency,location);
        }
        catch (Exception e) {
            log.error("Error creating checkout session :{}",e.getMessage(),e);
        }
        return StripePaymentRequest.builder().build();
    }



}
