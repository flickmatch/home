package com.flickmatch.platform.rest;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import com.flickmatch.platform.dynamodb.repository.RazorPaymentRequestRepository;
import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.RazorPaymentRequestBuilder;
import com.flickmatch.platform.graphql.type.MutationResult;
import com.flickmatch.platform.proxy.RazorPayProxy;
import com.flickmatch.platform.proxy.WhatsAppProxy;
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

    @Value("${razorpay.key.secret}")
    private String secret;

    @Autowired
    WhatsAppProxy whatsAppProxy;

//    @PostMapping("/processRazorPayment")
    @RequestMapping(value = "/processRazorPayment", method = RequestMethod.POST,consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<?> processRazorCallback(@RequestParam("razorpay_order_id") String orderId,
                                                  @RequestParam("razorpay_payment_id") String paymentId,
                                                  @RequestParam("razorpay_signature") String signature) {

        String uniqueEventId;
        try {
            RazorpayClient razorpay = razorPayProxy.getRazorPayClient();
            JSONObject options = new JSONObject();
            options.put("razorpay_order_id",orderId);
            options.put("razorpay_payment_id",paymentId);
            options.put("razorpay_signature", signature);
            RazorPaymentRequest paymentRequest = paymentRequestBuilder.getPaymentRequest(orderId);
            uniqueEventId = paymentRequest.getUniqueEventId();

//            https://razorpay.com/docs/payments/server-integration/java/payment-gateway/build-integration/#generate-signature-on-your-server

            boolean status =  Utils.verifyPaymentSignature(options, secret);
            if(status) {
                eventBuilder.joinEventRazorPayment(paymentRequest);
                paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest, true);
                log.info("Player joined event successfully.");
            }

            else {
                log.info("Invalid signature for orderId : "+orderId);
            }

        }
        catch (Exception e) {
            log.error("Error processing callback: {}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing callback");
        }

        whatsAppProxy.sendNotification(eventBuilder.getEventDataForNotification(uniqueEventId));
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", "https://play.flickmatch.in/match-queues#"+uniqueEventId);
        return new ResponseEntity<>(headers, HttpStatus.FOUND);


    }
}
