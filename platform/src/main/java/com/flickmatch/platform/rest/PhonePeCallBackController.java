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
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Map;

/**
 * Exposes POST endpoint for phonepe callback.
 * https://developer.phonepe.com/v1/reference/server-to-server-callback-5
 */
@RestController
@Log4j2
public class PhonePeCallBackController {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    PaymentRequestBuilder paymentRequestBuilder;
    @Autowired
    EventBuilder eventBuilder;
    @Autowired
    WhatsAppProxy whatsAppProxy;

    @PostMapping("/payment")
    void processCallBack(@RequestBody CallBackResponse callBackResponse,
                         @RequestHeader(value = "x_verify", required = false) String xVerify) {
        log.info(xVerify); //We need to use this to verify callback https://developer.phonepe.com/v1/reference/java-callback-verification
        try {
            String decodedResponse = new String(Base64.getDecoder().decode(callBackResponse.getResponse()));
            Map<String, Object> phonePeResponse = objectMapper.readValue(decodedResponse,
                    new TypeReference<Map<String, Object>>() {});
            Map<String, Object> data = objectMapper.readValue(objectMapper.writeValueAsString(phonePeResponse.get("data")),
                    new TypeReference<Map<String, Object>>() {});
            String merchantTransactionId = String.valueOf(data.get("merchantTransactionId"));
            PaymentRequest paymentRequest = paymentRequestBuilder.getPaymentRequest(merchantTransactionId);
            if ("PAYMENT_SUCCESS".equals(phonePeResponse.get("code"))) {
                eventBuilder.joinEvent(paymentRequest);
                paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest, true);
                whatsAppProxy.sendNotification();
            } else {
                log.info(merchantTransactionId);
                log.error(decodedResponse);
                paymentRequestBuilder.updatePaymentRequestStatus(paymentRequest, false);
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        } catch (Exception exception) {
            log.error("", exception);
        }
    }
}
