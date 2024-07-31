package com.flickmatch.platform.rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.flickmatch.platform.dynamodb.model.PaymentRequest;
import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.PaymentRequestBuilder;
import com.flickmatch.platform.proxy.WhatsAppProxy;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Map;

import static java.lang.String.format;
import org.apache.commons.text.StringEscapeUtils;

/**
 * Exposes POST endpoint for phonepe callback.
 * https://developer.phonepe.com/v1/reference/server-to-server-callback-5
 */
@RestController
@Log4j2
public class PhonePeCallBackController {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    private static final String PAID_STATUS = "PAID";

    @Autowired
    PaymentRequestBuilder paymentRequestBuilder;
    @Autowired
    EventBuilder eventBuilder;
    @Autowired
    WhatsAppProxy whatsAppProxy;

    private String sanitizeLogInput(String input) {
        // Remove new-line characters for plain text logs
        if (input == null) {
            return "";
        }
        // Remove newline characters and HTML encode
        return StringEscapeUtils.escapeHtml4(input.replaceAll("[\\r\\n]+", " "));

    }

    @PostMapping("/payment")
    void processCallBack(@RequestBody CallBackResponse callBackResponse,
                         @RequestHeader(value = "x_verify", required = false) String xVerify) {
        String sanitizedXVerify = xVerify != null ? xVerify.replace("\n", "").replace("\r", "") : "null";
        log.info("xVerify: {}", sanitizedXVerify); //We need to use this to verify callback https://developer.phonepe.com/v1/reference/java-callback-verification
        try {
            String decodedResponse = new String(Base64.getDecoder().decode(callBackResponse.getResponse()));
            Map<String, Object> phonePeResponse = objectMapper.readValue(decodedResponse,
                    new TypeReference<Map<String, Object>>() {});
            Map<String, Object> data = objectMapper.readValue(objectMapper.writeValueAsString(phonePeResponse.get("data")),
                    new TypeReference<Map<String, Object>>() {});
            String merchantTransactionId = String.valueOf(data.get("merchantTransactionId"));
            PaymentRequest paymentRequest = paymentRequestBuilder.getPaymentRequest(merchantTransactionId);

            if (paymentRequest == null) {
                log.error(format("Payment Request can not be null for merchantTransactionId %s", merchantTransactionId));
                return;
            }
            // check payment status to avoid duplicate events
            if ("PAYMENT_SUCCESS".equals(phonePeResponse.get("code"))) {
                if(PAID_STATUS.equals(paymentRequest.getStatus())) {
                    log.info("Ignoring duplicate callback for merchantTransactionId: " + merchantTransactionId);
                } else {
                    eventBuilder.joinEvent(paymentRequest);
                    paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest, true);
                    whatsAppProxy.sendNotification(eventBuilder.getEventDataForNotification(paymentRequest.getUniqueEventId()));
                }
            } else {
//                String sanitizedTransactionId = sanitizeLogInput(merchantTransactionId);
//                String sanitizedResponse = sanitizeLogInput(decodedResponse);
//
//                log.info(sanitizedTransactionId);
//                log.error(sanitizedResponse);
                handlePaymentFailure(merchantTransactionId, decodedResponse);
                paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest, false);
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        } catch (Exception exception) {
            log.error("Failed to process callback", exception);
        }
    }

    private void handlePaymentFailure(String merchantTransactionId, String decodedResponse) {
        String sanitizedTransactionId = sanitizeLogInput(merchantTransactionId);
        String sanitizedResponse = sanitizeLogInput(decodedResponse);

        log.info(sanitizedTransactionId);
        log.error(sanitizedResponse);
    }

}
