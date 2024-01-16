package com.flickmatch.platform.proxy;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.flickmatch.platform.records.WhatsAppNotification;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Log4j2
public class WhatsAppProxy {
    // Create a RestTemplate
    @Autowired
    private RestTemplate restTemplate;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public void sendNotification(WhatsAppNotification eventDataForNotification) {
        String nodeServerUrl = "http://ec2-18-223-205-234.us-east-2.compute.amazonaws.com:3000/";

        // Create headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String requestData = null;

        try {
            requestData = objectMapper.writeValueAsString(eventDataForNotification);
            log.info("notification data : " + requestData);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        HttpEntity<String> requestEntity = new HttpEntity<>(requestData, headers);

        // Make a POST request to the Node.js server
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(nodeServerUrl, requestEntity, String.class);
        // Print the response
        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            String responseBody = responseEntity.getBody();
            System.out.println("Response from Node.js server: " + responseBody);
        } else {
            System.err.println("Failed to post data to Node.js server");
        }
    }
}
