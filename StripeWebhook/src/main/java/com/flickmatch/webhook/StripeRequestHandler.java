package com.flickmatch.webhook;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestStreamHandler;
import com.flickmatch.webhook.graphql.client.PlatformGraphQLClient;
import com.flickmatch.webhook.graphql.input.JoinEventInput;
import com.flickmatch.webhook.graphql.input.PlayerInput;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import com.stripe.model.*;
import com.stripe.model.checkout.Session;
import com.stripe.net.ApiResource;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.http.*;


import java.io.*;
import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class StripeRequestHandler implements RequestStreamHandler {

    private final JSONParser parser = new JSONParser();
    private final Gson gson = new GsonBuilder().create();
    private final PlatformGraphQLClient graphQLClient = new PlatformGraphQLClient();


    @Override
    public void handleRequest(InputStream input, OutputStream output, Context context) throws IOException {
        LambdaLogger logger = context.getLogger();
        BufferedReader reader = new BufferedReader(new InputStreamReader(input));
        JSONObject responseJson = new JSONObject();
        try {
            JSONObject jsonRequest = (JSONObject) parser.parse(reader);
            if (jsonRequest.get("body") != null) {
                Event event = null;
                try {
                    event = ApiResource.GSON.fromJson(jsonRequest.get("body").toString(), Event.class);
                    logger.log("Event : " + event.toString());
                } catch (JsonSyntaxException e) {
                    // Invalid payload
                    logger.log("Webhook error while parsing basic request.");
                    responseJson.put("statusCode", 400);
                    responseJson.put("exception", e);
                    throw e;
                }
                // Deserialize the nested object inside the event
                EventDataObjectDeserializer dataObjectDeserializer = event.getDataObjectDeserializer();
                StripeObject stripeObject = null;
                if (dataObjectDeserializer.getObject().isPresent()) {
                    stripeObject = dataObjectDeserializer.getObject().get();
                } else {
                    // Deserialization failed, probably due to an API version mismatch.
                    // Refer to the Javadoc documentation on `EventDataObjectDeserializer` for
                    // instructions on how to handle this case, or return an error here.
                    throw new InvalidObjectException(" Deserialization failed : " + event.toString());
                }
                // Handle the event
                switch (event.getType()) {
                    case "payment_intent.succeeded":
                        PaymentIntent paymentIntent = (PaymentIntent) stripeObject;
                        logger.log("Payment for " + paymentIntent.getAmount() + " succeeded.");
                        // Then define and call a method to handle the successful payment intent.
                        // handlePaymentIntentSucceeded(paymentIntent);
                        break;
                    case "checkout.session.completed":
                        Session checkoutSession = (Session) stripeObject;
                        // Then define and call a method to handle the successful attachment of a PaymentMethod.
                        // handlePaymentMethodAttached(paymentMethod);
                        logger.log("Payment for " + checkoutSession.getAmountTotal() + " succeeded.");
                        logger.log("Payment link Id:" + checkoutSession.getPaymentLink());
                        logger.log("Name on card: " + checkoutSession.getCustomerDetails().getName());
                        logger.log("Email: " + checkoutSession.getCustomerDetails().getEmail());
                        //Following fields will be used for calling joinEvent mutation
                        logger.log("Player Name: " + getPlayerName(checkoutSession.getCustomFields()));
                        logger.log("Number: " + checkoutSession.getCustomerDetails().getPhone());
                        logger.log("CityId: " + checkoutSession.getMetadata().get("cityId"));
                        logger.log("EventId: " + checkoutSession.getClientReferenceId());

                        var variables = getVariables(getPlayerName(checkoutSession.getCustomFields()),
                                checkoutSession.getCustomerDetails().getPhone(),
                                checkoutSession.getMetadata().get("cityId"),
                                checkoutSession.getClientReferenceId());
                        logger.log(gson.toJson(variables));
                        String query = null;
                        try {
                            query = readFileFromResourceFolder("joinEvent.graphql");
                        } catch (FileNotFoundException e) {
                            logger.log(e.getMessage());
                        }
                        // Make the GraphQL API call to the platform application
                        var response = graphQLClient.callGraphQl(variables, query);
                        //logger.log(response.toString());
                        if (response.getStatusCode() == HttpStatus.OK) {
                            logger.log("HTTP call successful");
                            var responseBody = response.getBody();
                            logger.log(new Gson().toJson(responseBody));
//                            if (responseBody.getJSONObject("data").getJSONObject("updatePlayerList").getBoolean("isSuccessful")) {
//                                logger.log("Join event successful");
//                                System.out.println("Join event successful");
//                            } else {
//                                logger.log("Join event failed with error: " + joinEventResponse.getErrorMessage());
//                                System.out.println("Join event failed with error: " + joinEventResponse.getErrorMessage());
//                            }

                        } else {
                            logger.log("Failed to make the GraphQL API call. Status code: " + response.getStatusCodeValue());
                            System.out.println("Failed to make the GraphQL API call. Status code: " + response.getStatusCodeValue());
                        }
                        break;
                    default:
                        logger.log("Unhandled event type: " + event.getType());
                        break;
                }
                JSONObject responseBody = new JSONObject();
                responseBody.put("message", "Event Processed successfully");

                JSONObject headerJson = new JSONObject();
                headerJson.put("x-custom-header", "my custom header value");

                responseJson.put("statusCode", 200);
                responseJson.put("headers", headerJson);
                responseJson.put("body", responseBody.toString());
            }
        } catch (Exception e) {
            logger.log(e.getMessage());
            e.printStackTrace();
        } finally {
            OutputStreamWriter writer = new OutputStreamWriter(output, "UTF-8");
            writer.write(responseJson.toString());
            reader.close();
            writer.close();
        }
    }

    private Map<String, Object> getVariables(String playerName, String phone, String cityId, String eventId) {
        // Define the variables you want to pass to the GraphQL query here
        Map<String, Object> playerInput = Map.of("name", playerName,
                "waNumber", phone);

        Map<String, Object> input = Map.of("eventId", eventId,
                "cityId", cityId,
                "player", playerInput);

        return input;
    }

    private String getPlayerName(List<Session.CustomField> customFields) {
        if (customFields == null) {
            return null;
        }
        var customNameObject = customFields.stream()
                .filter(customField -> "Name".equals(customField.getLabel().getCustom()))
                .findFirst().orElse(null);

        return customNameObject.getText().getValue();
    }

    public static String readFileFromResourceFolder(String fileName) throws FileNotFoundException {
        String result = "";
        ClassLoader classLoader = PlatformGraphQLClient.class.getClassLoader();
        File file = new File(classLoader.getResource(fileName).getFile());
        try (Scanner scanner = new Scanner(file)) {
            while (scanner.hasNextLine()) {
                result += scanner.nextLine();
            }
        }
        return result;
    }

}
