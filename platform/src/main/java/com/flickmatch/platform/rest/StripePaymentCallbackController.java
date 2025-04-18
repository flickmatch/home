package com.flickmatch.platform.rest;

import com.flickmatch.platform.dynamodb.model.StripePaymentRequest;
import com.flickmatch.platform.dynamodb.repository.StripePaymentRequestRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.Optional;

@RestController
@RequestMapping("/stripe")
@Log4j2
public class StripePaymentCallbackController {

    @Autowired
    private StripePaymentRequestRepository stripePaymentRequestRepository;

    @GetMapping("/success")
    public ResponseEntity<String> handleStripeSuccess(@RequestParam("session_id") String sessionId) {
        log.info("Stripe success callback received for sessionId: {}", sessionId);

        try {
            // Fetch existing payment request
            Optional<StripePaymentRequest> optionalRequest = stripePaymentRequestRepository.findById(sessionId);

            if (optionalRequest.isPresent()) {
                StripePaymentRequest request = optionalRequest.get();

                // Update status
                request.setStatus("SUCCESS");

                // Save it back to DynamoDB
                stripePaymentRequestRepository.save(request);


                HttpHeaders headers = new HttpHeaders();
                headers.setLocation(URI.create("https://flickmatch.in/match-queues"));
                return new ResponseEntity<>(headers, HttpStatus.FOUND);
            } else {
                log.warn("No StripePaymentRequest found for sessionId: {}", sessionId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Session not found");
            }

        } catch (Exception e) {
            log.error("Error updating StripePaymentRequest for sessionId {}: {}", sessionId, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing payment callback");
        }


    }

    @GetMapping("/cancel")
    public ResponseEntity<Void> handleStripeCancel(@RequestParam("session_id") String sessionId) {
        log.info("Stripe cancel callback received for sessionId: {}", sessionId);

        try {
            Optional<StripePaymentRequest> optionalRequest = stripePaymentRequestRepository.findById(sessionId);

            if (optionalRequest.isPresent()) {
                StripePaymentRequest request = optionalRequest.get();
                request.setStatus("CANCELLED");
                stripePaymentRequestRepository.save(request);
                log.info("Payment status updated to CANCELLED for sessionId: {}", sessionId);

                HttpHeaders headers = new HttpHeaders();
                headers.setLocation(URI.create("https://flickmatch.in/match-queues"));
                return new ResponseEntity<>(headers, HttpStatus.FOUND);
            } else {
                log.warn("No StripePaymentRequest found for sessionId: {}", sessionId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            log.error("Error updating StripePaymentRequest for sessionId {}: {}", sessionId, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
