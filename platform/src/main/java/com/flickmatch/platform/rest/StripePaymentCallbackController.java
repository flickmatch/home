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

    private String sanitizeForLog(String input) {
        if (input == null) return "";
        return input.replaceAll("[\n\r\t]", "_").replaceAll("[^\\p{Print}]", "");
    }

    @GetMapping("/success")
    public ResponseEntity<Void> handleStripeSuccess(@RequestParam("session_id") String sessionId) {
        String sanitizedSessionId = sanitizeForLog(sessionId);
        log.info("Stripe success callback received for sessionId: {}", sanitizedSessionId);

        try {
            Optional<StripePaymentRequest> optionalRequest = stripePaymentRequestRepository.findById(sessionId);

            if (optionalRequest.isPresent()) {
                StripePaymentRequest request = optionalRequest.get();
                request.setStatus("SUCCESS");
                stripePaymentRequestRepository.save(request);
                log.info("Payment status updated to SUCCESS for sessionId: {}", sanitizedSessionId);

                HttpHeaders headers = new HttpHeaders();
                headers.setLocation(URI.create("https://flickmatch.in/match-queues"));
                return new ResponseEntity<>(headers, HttpStatus.FOUND);
            } else {
                log.warn("No StripePaymentRequest found for sessionId: {}", sanitizedSessionId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            log.error("Error updating StripePaymentRequest for sessionId {}: {}", sanitizedSessionId, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/cancel")
    public ResponseEntity<Void> handleStripeCancel(@RequestParam("session_id") String sessionId) {
        String sanitizedSessionId = sanitizeForLog(sessionId);
        log.info("Stripe cancel callback received for sessionId: {}", sanitizedSessionId);

        try {
            Optional<StripePaymentRequest> optionalRequest = stripePaymentRequestRepository.findById(sessionId);

            if (optionalRequest.isPresent()) {
                StripePaymentRequest request = optionalRequest.get();
                request.setStatus("CANCELLED");
                stripePaymentRequestRepository.save(request);
                log.info("Payment status updated to CANCELLED for sessionId: {}", sanitizedSessionId);

                HttpHeaders headers = new HttpHeaders();
                headers.setLocation(URI.create("https://flickmatch.in/match-queues"));
                return new ResponseEntity<>(headers, HttpStatus.FOUND);
            } else {
                log.warn("No StripePaymentRequest found for sessionId: {}", sanitizedSessionId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

        } catch (Exception e) {
            log.error("Error updating StripePaymentRequest for sessionId {}: {}", sanitizedSessionId, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
