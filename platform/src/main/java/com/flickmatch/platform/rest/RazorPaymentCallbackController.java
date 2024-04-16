package com.flickmatch.platform.rest;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import com.flickmatch.platform.dynamodb.repository.RazorPaymentRequestRepository;
import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.RazorPaymentRequestBuilder;
import com.flickmatch.platform.graphql.type.MutationResult;
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

    @PostMapping("/processRazorPayment")
//    @RequestMapping(value = "/processRazorPayment", method = RequestMethod.POST,consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<?> processRazorCallback(@RequestBody RazorPaymentCallbackResponse callbackResponse){
        try {
            RazorpayClient razorpay = razorPayProxy.getRazorPayClient();
            RazorPaymentRequest paymentRequest = paymentRequestBuilder.getPaymentRequest(callbackResponse.getRazorpay_order_id());
            JSONObject options = new JSONObject();
            options.put("razorpay_order_id",callbackResponse.getRazorpay_order_id());
            options.put("razorpay_payment_id",callbackResponse.getRazorpay_payment_id());
            options.put("razorpay_signature", callbackResponse.getRazorpay_signature());

//            https://razorpay.com/docs/payments/server-integration/java/payment-gateway/build-integration/#generate-signature-on-your-server

            boolean status =  Utils.verifyPaymentSignature(options, secret);
            if(status) {
                eventBuilder.joinEventRazorPayment(paymentRequest);
                paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest, true);
                log.info("Player joined event successfully.");
            }

            else {
                log.info("Invalid signature for orderId : "+callbackResponse.getRazorpay_order_id());
            }

        }
        catch (Exception e) {
            log.error("Error processing callback: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing callback");
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", "https://play.flickmatch.in/");
        return new ResponseEntity<>(headers, HttpStatus.FOUND);

    }
}
