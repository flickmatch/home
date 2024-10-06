package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.dynamodb.model.User;
import com.flickmatch.platform.dynamodb.repository.UserRepository;
import com.flickmatch.platform.graphql.builder.PassBuilder;
import com.flickmatch.platform.graphql.builder.PassPaymentRequestBuilder;
import com.flickmatch.platform.graphql.builder.RazorPaymentRequestBuilder;
import com.flickmatch.platform.graphql.builder.UserBuilder;
import com.flickmatch.platform.graphql.input.PassPaymentInput;
import com.flickmatch.platform.graphql.type.RazorPayOutput;
import com.flickmatch.platform.proxy.RazorPayProxy;
import com.razorpay.RazorpayClient;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import javax.swing.text.html.Option;
import java.math.BigDecimal;

@Controller
@Log4j2
public class PassPaymentRequestController {
    @Autowired
    RazorPaymentRequestBuilder razorPaymentRequestBuilder;

    @Autowired
    RazorPayProxy razorPayProxy;
    @Autowired
    PassBuilder passBuilder;
    @Autowired
    PassPaymentRequestBuilder passPaymentRequestBuilder;
    @Autowired
    UserRepository userRepository;

    @MutationMapping
    public RazorPayOutput initiatePassPayment(@Argument PassPaymentInput input) {
        try {
            RazorpayClient client = razorPayProxy.getRazorPayClient();
            //   *100 to convert to paisa
            Double amount = passBuilder.getAmountForPass(input.getPassId())*100;
            String location = input.getLocation();
            String currency = input.getCurrency();
            String orderId = passPaymentRequestBuilder.createOrderRequest(client,currency, amount);
            String email = input.getEmail();
            User user = userRepository.findByEmail(input.getEmail()).get();
            if(user==null) {
                throw new Exception("The user with the given email does not exist");
            }
            passPaymentRequestBuilder.createPaymentRequest(orderId, location, user.getUserId(), input.getPassId(), amount,email);
            return RazorPayOutput.builder().orderId(orderId).isInitiated(true).amount(amount).build();
        }
        catch (Exception e) {
            log.error("Error creating order: {}", e.getMessage());
            return RazorPayOutput.builder().isInitiated(false)
                    .build();
        }

    }

}
