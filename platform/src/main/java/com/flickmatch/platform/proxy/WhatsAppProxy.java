package com.flickmatch.platform.proxy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WhatsAppProxy {
    // Create a RestTemplate
    @Autowired
    private RestTemplate restTemplate;

    public void sendNotification() {
        String nodeServerUrl = "http://ec2-18-223-205-234.us-east-2.compute.amazonaws.com:3000/";

        // Create headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Create the request payload
        String requestData = "{\"name\":\"John\",\"age\":30}";
        HttpEntity<String> requestEntity = new HttpEntity<>(requestData, headers);

        // Make a POST request to the Node.js server
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(nodeServerUrl, String.class);
        // Print the response
        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            String responseBody = responseEntity.getBody();
            System.out.println("Response from Node.js server: " + responseBody);
        } else {
            System.err.println("Failed to post data to Node.js server");
        }
    }
}
