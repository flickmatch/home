package com.flickmatch.webhook;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestStreamHandler;
import com.flickmatch.webhook.graphql.input.JoinEventInput;
import com.flickmatch.webhook.graphql.input.PlayerInput;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import com.stripe.model.*;
import com.stripe.model.checkout.Session;
import com.stripe.net.ApiResource;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;


import java.io.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StripeRequestHandler implements RequestStreamHandler {

    private final RestTemplate restTemplate;
    public StripeRequestHandler(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    private JSONParser parser = new JSONParser();
    private Gson gson = new GsonBuilder().create();


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


                        // Make the GraphQL API call to the platform application
                        String graphqlQuery = "mutation JoinEventMutation($input: JoinEventInput!) { " +
                                "joinEvent(input: $input) {" +
                                "  isSuccessful" +
                                "  errorMessage" +
                                "}" +
                                "}";
                        JoinEventRequest joinEventRequest = new JoinEventRequest(graphqlQuery, getVariables());
                        String platformUrl = "http://localhost:8080/graphql";
                        HttpHeaders headers = new HttpHeaders();
                        headers.setContentType(MediaType.APPLICATION_JSON);
                        HttpEntity<JoinEventRequest> entity = new HttpEntity<>(joinEventRequest, headers);
                        ResponseEntity<JoinEventResponse> response = restTemplate.exchange(
                                platformUrl,
                                HttpMethod.POST,
                                entity,
                                JoinEventResponse.class
                        );
                        if (response.getStatusCode() == HttpStatus.OK) {
                            JoinEventResponse joinEventResponse = response.getBody();
                            if (joinEventResponse.isSuccessful()) {
                                System.out.println("Join event successful");
                            } else {
                                System.out.println("Join event failed with error: " + joinEventResponse.getErrorMessage());
                            }

                        } else {
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
        } finally {
            OutputStreamWriter writer = new OutputStreamWriter(output, "UTF-8");
            writer.write(responseJson.toString());
            reader.close();
            writer.close();
        }
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

     public Map<String, Object> getVariables() {
        // Define the variables you want to pass to the GraphQL query here
        // For example:
        PlayerInput playerInput = PlayerInput.builder()
                .name("John Doe")
                .waNumber("waNumber")
                .build();

        JoinEventInput input = JoinEventInput.builder()
                .cityId("cityId")
                .eventId("eventId")
                .player(playerInput)
                .build();

        Gson gson = new Gson();
        String inputJson = gson.toJson(input);
        Map<String, Object> variables = new HashMap<>();
        variables.put("input", inputJson);
        // Add more variables as needed
        return variables;
    }

    // Define your GraphQL request and response classes here
    // For example:

    public static class JoinEventRequest {
        private String query;
        private Map<String, Object> variables;

        public JoinEventRequest(String query, Map<String, Object> variables) {
            this.query = query;
            this.variables = variables;
        }

        // Getters, setters...
    }


    private static class JoinEventResponse {
        private boolean isSuccessful;
        private String errorMessage;

        // Constructors

        public JoinEventResponse(boolean isSuccessful, String errorMessage) {
            this.isSuccessful = isSuccessful;
            this.errorMessage = errorMessage;
        }

        // Getters and Setters
        public boolean isSuccessful() {
            return isSuccessful;
        }

        public void setSuccessful(boolean successful) {
            isSuccessful = successful;
        }

        public String getErrorMessage() {
            return errorMessage;
        }

        public void setErrorMessage(String errorMessage) {
            this.errorMessage = errorMessage;
        }
    }
}
