package com.flickmatch.platform.rest;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import com.flickmatch.platform.dynamodb.model.User;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.dynamodb.repository.RazorPaymentRequestRepository;
import com.flickmatch.platform.dynamodb.repository.UserRepository;
import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.RazorPaymentRequestBuilder;
import com.flickmatch.platform.graphql.type.MutationResult;
import com.flickmatch.platform.proxy.RazorPayProxy;
import com.flickmatch.platform.proxy.WhatsAppProxy;
import com.flickmatch.platform.records.ParsedUniqueEventId;
import com.razorpay.RazorpayClient;
import com.razorpay.Utils;
import lombok.extern.log4j.Log4j2;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;

@RestController
@Log4j2
public class RazorPaymentCallbackController {

    private static final String PAID_STATUS = "PAID";
    @Autowired
    private RazorPaymentRequestRepository razorPaymentRequestRepository;
    @Autowired
    RazorPaymentRequestBuilder paymentRequestBuilder;
    @Autowired
    EventBuilder eventBuilder;
    @Autowired
    private RazorPayProxy razorPayProxy;
    @Autowired
    private UserRepository userRepository;

    @Value("${razorpay.key.secret}")
    private String secret;

    // Utility method to sanitize inputs for logging
    private String sanitizeForLog(String input) {
        if (input == null) return ""; // Avoid NullPointerException
        return input.replaceAll("[\n\r\t]", "_")  // Replace newline, carriage return, tab with underscore
                .replaceAll("[^\\p{Print}]", "");  // Remove non-printable characters
    }


//    @Autowired
//    WhatsAppProxy whatsAppProxy;

    //    @PostMapping("/processRazorPayment")
    @RequestMapping(value = "/processRazorPayment", method = RequestMethod.POST,consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<?> processRazorCallback(@RequestParam("razorpay_order_id") String orderId,
                                                  @RequestParam("razorpay_payment_id") String paymentId,
                                                  @RequestParam("razorpay_signature") String signature) {

        String sanitizedOrderId = sanitizeForLog(orderId);
        log.info("Processing callback for order {}", sanitizedOrderId);
        String uniqueEventId,redirectUrl;
        int flag=0;
        try {
            RazorpayClient razorpay = razorPayProxy.getRazorPayClient();
            JSONObject options = new JSONObject();
            options.put("razorpay_order_id",orderId);
            options.put("razorpay_payment_id",paymentId);
            options.put("razorpay_signature", signature);
            RazorPaymentRequest paymentRequest = paymentRequestBuilder.getPaymentRequest(orderId);

            log.info("Processing callback for email " + paymentRequest.getEmail() + " and uniqueEventId " + paymentRequest.getUniqueEventId());

            uniqueEventId = paymentRequest.getUniqueEventId();
            redirectUrl = paymentRequest.getRedirectUrl();
            String[] parts =uniqueEventId.split("-");
            String dateStr =  parts[1] + "-" + parts[2] + "-" + parts[3];
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDate eventDate;

//            https://razorpay.com/docs/payments/server-integration/java/payment-gateway/build-integration/#generate-signature-on-your-server

            boolean status =  Utils.verifyPaymentSignature(options, secret);

            // Sanitize user inputs to avoid log injection
            // String sanitizedOrderId = orderId.replaceAll("[\n\r]", "");
            String sanitizedPaymentId = sanitizeForLog(paymentId);
            String sanitizedSignature = sanitizeForLog(signature);

            log.info("OrderId: {}, PaymentId: {}, Signature: {}", sanitizedOrderId, sanitizedPaymentId, sanitizedSignature);
            log.info("Status: {}", status);


            if(status) {
                if(PAID_STATUS.equals(paymentRequest.getStatus())) {
                    log.info("Ignoring duplicate payments.");
                }
                else {
                    eventBuilder.joinEventRazorPayment(paymentRequest);
                    paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest,paymentId, true);
                    for (Event.PlayerDetails player : paymentRequest.getPlayerDetailsList()) {
                        if(player.getEmail() != null) {
                            Optional<User> existingUser = userRepository.findByEmail(player.getEmail());
                            if (existingUser.isPresent()) {
                                User user = existingUser.get();
                                if (!user.getPlayerStats().getGameLinks().contains(uniqueEventId)){
                                    user.getPlayerStats().getGameLinks().add(uniqueEventId);
                                }
                                userRepository.save(user);
                            }
                        }
                    }
                    log.info("Player joined event successfully.");
                }
            }

            else {
                if (orderId.matches("\\w+")) {
                    log.info("Invalid signature for orderId : {}", sanitizedOrderId);
                } else {
                    log.info("Invalid signature for orderId :[INVALID]");
                }
            }

//            log.info("Proceeding for redirection part.");

            try {
                eventDate = LocalDate.parse(dateStr, formatter);
            } catch (DateTimeParseException e) {
                log.error("Invalid date format in uniqueEventId: {}", dateStr);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid event date");
            }

            // Check if the event date is before today
            if (eventDate.isBefore(LocalDate.now())) {
                flag=1;
            }

        }
        catch (Exception e) {
            log.error("Error processing callback: {}", e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing callback");
//            log.error("Error processing callback: {}", e.getMessage(), e);
        }




//        whatsAppProxy.sendNotification(eventBuilder.getEventDataForNotification(uniqueEventId));
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", redirectUrl + "/event/" + uniqueEventId);
        return new ResponseEntity<>(headers, HttpStatus.FOUND);


    }



    @PostMapping("/razorpay-webhook")
    public ResponseEntity<?> razorpayWebhook(@RequestBody(required = false) String payload) {
        log.info("Razorpay Webhook received: {}", sanitizeForLog(payload));
        String uniqueEventId, redirectUrl;
        int isEventBeforeToday = 0;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode root = objectMapper.readTree(payload);

            JsonNode paymentEntity = root.path("payload").path("payment").path("entity");
            String paymentId = paymentEntity.path("id").asText();
            String status = paymentEntity.path("status").asText();
            String orderId = paymentEntity.path("order_id").asText();
            if(status.equals("captured")) {

                try {
                    RazorPaymentRequest paymentRequest = paymentRequestBuilder.getPaymentRequest(orderId);
                    uniqueEventId = paymentRequest.getUniqueEventId();
                    redirectUrl = paymentRequest.getRedirectUrl();
                    String[] parts =uniqueEventId.split("-");
                    String dateStr =  parts[1] + "-" + parts[2] + "-" + parts[3];
                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                    LocalDate eventDate;
                    if(PAID_STATUS.equals(paymentRequest.getStatus())) {
                        log.info("Ignoring duplicate payments.");
                    }
                    else {
                        eventBuilder.joinEventRazorPayment(paymentRequest);
                        paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest, paymentId, true);
                        log.info("Player joined event successfully.");
                    }
                    try {
                        eventDate = LocalDate.parse(dateStr, formatter);
                    } catch (DateTimeParseException e) {
                        log.error("Invalid date format in uniqueEventId: {}", dateStr);
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid event date");
                    }

                    // Check if the event date is before today
                    if (eventDate.isBefore(LocalDate.now())) {
                        isEventBeforeToday=1;
                    }

                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
            else {
                log.error("Payment not captured for payment_id: {}", paymentId);
                return ResponseEntity.badRequest().build();
            }


        } catch (Exception e) {
            log.error("Error parsing Razorpay Webhook payload", e);
            return ResponseEntity.badRequest().build();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", redirectUrl + "/event/" + uniqueEventId);
        return new ResponseEntity<>(headers, HttpStatus.FOUND);

    }

}
