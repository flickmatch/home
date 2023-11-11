package com.flickmatch.platform.rest;

import lombok.extern.log4j.Log4j2;
import org.springframework.boot.json.GsonJsonParser;
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

    private static final JsonParser jsonParser = new JacksonJsonParser();

    @PostMapping("/payment")
    void processCallBack(@RequestBody CallBackResponse callBackResponse,
                         @RequestHeader("x_verify") String xVerify) {
        log.info(xVerify); //We need to use this to verify callback https://developer.phonepe.com/v1/reference/java-callback-verification
        String decodedResponse = new String(Base64.getDecoder().decode(callBackResponse.getResponse()));
        Map<String, Object> phonePeResponse = jsonParser.parseMap(decodedResponse);
        if ("PAYMENT_SUCCESS".equals(phonePeResponse.get("code"))) {
            log.info("store data in DB");
        } else {
            log.error(decodedResponse);
        }
    }
}
