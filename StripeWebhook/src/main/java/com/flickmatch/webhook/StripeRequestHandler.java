package com.flickmatch.webhook;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestStreamHandler;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import com.stripe.model.*;
import com.stripe.model.checkout.Session;
import com.stripe.net.ApiResource;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.*;
import java.util.List;

public class StripeRequestHandler implements RequestStreamHandler {

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
                    logger.log(" Deserialization failed : " + event.toString());
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
                        logger.log("Number: " + checkoutSession.getAmountTotal());
                        logger.log("Name on card: " + checkoutSession.getCustomerDetails().getName());
                        logger.log("Email: " + checkoutSession.getCustomerDetails().getEmail());
                        logger.log("Player Name: " + getPlayerName(checkoutSession.getCustomFields()));
                        logger.log("Payment link Id:" + checkoutSession.getPaymentLink());
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
}
