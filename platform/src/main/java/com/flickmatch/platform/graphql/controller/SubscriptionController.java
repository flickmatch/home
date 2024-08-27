package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.dynamodb.model.Subscription;
import com.flickmatch.platform.graphql.builder.SubscriptionBuilder;
import com.flickmatch.platform.graphql.input.CreateSubscriptionInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

@Controller
@Log4j2
public class SubscriptionController {

    @Autowired
    SubscriptionBuilder subscriptionBuilder;

    @MutationMapping
    public MutationResult createSubscription(@Argument CreateSubscriptionInput input) {
        return subscriptionBuilder.createSubscription(input);
    }

    @QueryMapping
    public com.flickmatch.platform.graphql.type.Subscription getActiveSubscription(String email) {
        return subscriptionBuilder.getActiveSubscription(email);
    }

}
