package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.StripePaymentRequest;
import com.flickmatch.platform.dynamodb.repository.StripePaymentRequestRepository;
import com.flickmatch.platform.graphql.input.CreateUserInput;
import com.flickmatch.platform.graphql.input.StripeInput;
import com.flickmatch.platform.graphql.type.StripeOutput;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;



@Log4j2
@Service
public class StripePaymentRequestBuilder {

    @Autowired
    private  EventBuilder eventBuilder;

    @Autowired
    private UserBuilder userBuilder;

    @Autowired
   private StripePaymentRequestRepository stripePaymentRequestRepository;

    @Value("${stripe.publishable.key}")
    private  String publishableKey;


    @Value("${stripe.secret.key}")
    private String secretKey;


    String formatDateToString(LocalDate date) {
        return date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }


    public StripeOutput checkoutProducts(StripeInput input, double amount,long quantity,String name,String currency){

        Stripe.apiKey=secretKey;
       

        SessionCreateParams.LineItem.PriceData.ProductData productData =
                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                        .setName(name)
                        .build();

        SessionCreateParams.LineItem.PriceData priceData=
                SessionCreateParams.LineItem.PriceData.builder()
                        .setCurrency(input.getCurrency()==null?"USD":input.getCurrency())
                        .setUnitAmount((long)(amount)*100)
                        .setProductData(productData)
                        .build();


        SessionCreateParams.LineItem lineItem=  SessionCreateParams.LineItem.builder()
                .setQuantity(quantity)
                .setPriceData(priceData)
                .build();

        SessionCreateParams params= SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/stripe/success?session_id={CHECKOUT_SESSION_ID}")
                .setCancelUrl("https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/stripe/cancel")
                .setBillingAddressCollection(SessionCreateParams.BillingAddressCollection.REQUIRED)
                .addLineItem(lineItem)
                .build();

        Session session=null;

        try{
            session=Session.create(params);
        }catch(StripeException ex){
            System.out.println(ex.getMessage());
        }

        LocalDate date = LocalDate.now();
        String dateString = formatDateToString(date);


        return StripeOutput.builder()
                .status("SUCCESS")
                .message("Payment session created")
                .sessionId(session.getId())
                .sessionUrl(session.getUrl())
                .build();

    }

    public StripePaymentRequest createPaymentRequest(StripeInput input, double amount,long quantity,String name,String currency,String location){
        LocalDate date = LocalDate.now();
        String dateString = formatDateToString(date);
        String uniqueEventId= input.getUniqueEventId();
        AtomicInteger existingPlayerCount = new AtomicInteger(eventBuilder.countPlayersInQueue(uniqueEventId));
        List<com.flickmatch.platform.dynamodb.model.Event.PlayerDetails> playerDetailsList = input.getPlayerInputList().stream()
                .map(playerInput -> Event.PlayerDetails.builder()
                        .name(playerInput.getName())
                        .waNumber(playerInput.getWaNumber())
                        .teamColor(playerInput.getTeamColor())
                        .email(playerInput.getEmail())
                        .index(existingPlayerCount.getAndIncrement())
                        .build())
                .collect(Collectors.toList());
        StripeOutput output=checkoutProducts(input,amount,quantity,name,currency);
        String email=input.getEmail();
        String phoneNumber=input.getPhoneNumber();
        String pinCode=input.getVenuePinCode();
        try {
            // Create or update the user with the provided phone number
            CreateUserInput createUserInput = CreateUserInput.builder()
                    .email(email) // Assuming you have the email from the payment request
                    .phoneNumber(phoneNumber)
                    .location(location)
                    .pinCode(pinCode)
                    .build();
            userBuilder.createUser(createUserInput);
        } catch (Exception e) {
            log.error("Error creating user: " + e.getMessage());
        }
        String gameNumber = input.getUniqueEventId().split("-")[4];
        StripePaymentRequest stripePaymentRequest = StripePaymentRequest.builder()
                .sessionId(output.getSessionId())
                .uniqueEventId(uniqueEventId)
                .playerDetailsList(playerDetailsList)
                .status("INITIATED")
                .date(dateString)
                .location(location)
                .gameNumber(gameNumber)
                .email(email)
                .phoneNumber(phoneNumber)
                .redirectUrl(input.getRedirectUrl())
                .pinCode(pinCode)
                .sessionUrl(output.getSessionUrl())
                .build();
        return stripePaymentRequestRepository.save(stripePaymentRequest);



    }

}


