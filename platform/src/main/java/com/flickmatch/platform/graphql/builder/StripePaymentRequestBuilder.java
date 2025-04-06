package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.graphql.input.StripeInput;
import com.flickmatch.platform.graphql.type.StripeOutput;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class StripePaymentRequestBuilder {
    @Value("${stripe.publishable.key}")
    private  String publishableKey;

    @Value("${stripe.secret.key}")
    private String secretKey;

    public StripeOutput checkoutProducts(StripeInput input){

        Stripe.apiKey=secretKey;

        SessionCreateParams.LineItem.PriceData.ProductData productData =
                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                        .setName(input.getName())
                        .build();

        SessionCreateParams.LineItem.PriceData priceData=
                SessionCreateParams.LineItem.PriceData.builder()
                        .setCurrency(input.getCurrency()==null?"USD":input.getCurrency())
                        .setUnitAmount((input.getAmount())*100)
                        .setProductData(productData)
                        .build();


        SessionCreateParams.LineItem lineItem=  SessionCreateParams.LineItem.builder()
                .setQuantity(input.getQuantity())
                .setPriceData(priceData)
                .build();

        SessionCreateParams params= SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("https://flickmatch.in/match-queues")
                .setCancelUrl("https://flickmatch.in/match-queues")
                .addLineItem(lineItem)
                .build();

        Session session=null;

        try{
            session=Session.create(params);
        }catch(StripeException ex){
          System.out.println(ex.getMessage());
        }

        return StripeOutput.builder()
                .status("SUCCESS")
                .message("Payment session created")
                .sessionId(session.getId())
                .sessionUrl(session.getUrl())
                .build();

    }
}
