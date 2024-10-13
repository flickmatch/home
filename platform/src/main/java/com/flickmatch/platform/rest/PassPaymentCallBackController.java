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
}
