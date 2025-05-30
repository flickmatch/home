package com.flickmatch.platform.rest;
import com.flickmatch.platform.dynamodb.model.PassPaymentRequest;
import com.flickmatch.platform.dynamodb.repository.PassPaymentRequestRepository;
import com.flickmatch.platform.graphql.builder.PassPaymentRequestBuilder;
import com.flickmatch.platform.graphql.builder.SubscriptionBuilder;
import com.flickmatch.platform.proxy.RazorPayProxy;
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
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@Log4j2
public class PassPaymentCallBackController {

    private static final String PAID_STATUS = "PAID";
    @Autowired
    private PassPaymentRequestRepository passPaymentRequestRepository;
    @Autowired
    PassPaymentRequestBuilder paymentRequestBuilder;
    @Autowired
    SubscriptionBuilder subscriptionBuilder;
    @Autowired
    private RazorPayProxy razorPayProxy;

    @Value("${razorpay.key.secret}")
    private String secret;

    private String sanitizeForLog(String input) {
        if (input == null) return ""; // Avoid NullPointerException
        return input.replaceAll("[\n\r\t]", "_")  // Replace newline, carriage return, tab with underscore
                .replaceAll("[^\\p{Print}]", "");  // Remove non-printable characters
    }


    @RequestMapping(value = "/processPassPayment", method = RequestMethod.POST,consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<?> processPassCallback(@RequestParam("razorpay_order_id") String orderId,
                                                  @RequestParam("razorpay_payment_id") String paymentId,
                                                  @RequestParam("razorpay_signature") String signature) {

        String passId,email;
        try {
            RazorpayClient razorpay = razorPayProxy.getRazorPayClient();
            JSONObject options = new JSONObject();
            options.put("razorpay_order_id",orderId);
            options.put("razorpay_payment_id",paymentId);
            options.put("razorpay_signature", signature);
            PassPaymentRequest paymentRequest = paymentRequestBuilder.getPaymentRequest(orderId);
            passId = paymentRequest.getPassId();
            email=paymentRequest.getEmail();

//            https://razorpay.com/docs/payments/server-integration/java/payment-gateway/build-integration/#generate-signature-on-your-server

            boolean status =  Utils.verifyPaymentSignature(options, secret);
            if(status) {
                if(PAID_STATUS.equals(paymentRequest.getStatus())) {
                    log.info("Ignoring duplicate payments for passes.");
                }
                else {
                    subscriptionBuilder.createSubscription(email,passId);
                    paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest,paymentId, true);
                    log.info("Subscription created successfully.");
                }
            }

            else {
                if (orderId.matches("\\w+")) {
                    log.info("Invalid signature for orderId : " + orderId);
                } else {
                    log.info("Invalid signature for orderId :[INVALID]");
                }
            }

        }
        catch (Exception e) {
            log.error("Error processing callback: {}", e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing callback");
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", "https://flickmatch.in/match-queues");
        return new ResponseEntity<>(headers, HttpStatus.FOUND);


    }

    @PostMapping("/pass-webhook")
    public ResponseEntity<?> passWebhook(@RequestBody(required = false) String payload) {
        log.info("Razorpay Webhook received: {}", sanitizeForLog(payload));
        try {
            // Parse the incoming webhook payload
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode root = objectMapper.readTree(payload);

            JsonNode paymentEntity = root.path("payload").path("payment").path("entity");
            String paymentId = paymentEntity.path("id").asText();
            String status = paymentEntity.path("status").asText();
            String orderId = paymentEntity.path("order_id").asText();

            // Proceed if the payment is captured
            if (status.equals("captured")) {
                // Process payment and create subscription
                RazorpayClient razorpay = razorPayProxy.getRazorPayClient();
                JSONObject options = new JSONObject();
                options.put("razorpay_order_id", orderId);
                options.put("razorpay_payment_id", paymentId);

                // Fetch the original payment request
                PassPaymentRequest paymentRequest = paymentRequestBuilder.getPaymentRequest(orderId);

                // Verify payment signature
                boolean isValidSignature = Utils.verifyPaymentSignature(options, secret);

                if (isValidSignature) {
                    if (PAID_STATUS.equals(paymentRequest.getStatus())) {
                        log.info("Ignoring duplicate payments for passes.");
                    } else {
                        String passId = paymentRequest.getPassId();
                        String email = paymentRequest.getEmail();
                        subscriptionBuilder.createSubscription(email, passId);
                        paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest, paymentId, true);
                        log.info("Subscription created successfully.");
                    }
                } else {
                    log.error("Invalid signature for orderId: {}", orderId);
                }
            } else {
                log.error("Payment not captured for payment_id: {}", paymentId);
                return ResponseEntity.badRequest().build();
            }
        } catch (Exception e) {
            log.error("Error processing webhook: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing webhook");
        }

        // Redirect to the success page
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", "https://flickmatch.in/match-queues");
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }
}
