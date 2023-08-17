package com.flickmatch.webhook.graphql.client;

import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Map;
import java.util.Scanner;

public class PlatformGraphQLClient {

    private final RestTemplate restTemplate;
    private final String platformProdUrl = "https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/graphql";

    public PlatformGraphQLClient() {
        this.restTemplate = new RestTemplate();
    }

    public ResponseEntity<String> callGraphQl(Map<String, Object> variables, String query) {

        if (query == null) {
            query = "mutation JoinEventMutation($eventId: ID!, $cityId: ID!, $player: PlayerInput!) {\n" +
                    "    joinEvent(input: {eventId : $eventId, cityId: $cityId, player: $player}) {\n" +
                    "        isSuccessful\n" +
                    "        errorMessage\n" +
                    "    }\n" +
                    "}";
        }


        var body = Map.of("query", query,
                "variables", variables);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Map> entity = new HttpEntity<>(body, headers);
        return restTemplate.exchange(
                platformProdUrl,
                HttpMethod.POST,
                entity,
                String.class
        );
    }


}
