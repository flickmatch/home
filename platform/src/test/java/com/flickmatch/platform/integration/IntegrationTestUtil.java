package com.flickmatch.platform.integration;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Map;
import java.util.Scanner;

public final class IntegrationTestUtil {

    public static String readFileFromResourceFolder(String fileName) throws FileNotFoundException {
        String result = "";
        ClassLoader classLoader = IntegrationTestUtil.class.getClassLoader();
        File file = new File(classLoader.getResource(fileName).getFile());
        try (Scanner scanner = new Scanner(file)) {
            while (scanner.hasNextLine()) {
                result += scanner.nextLine();
            }
        }
        return result;
    }

    public static JSONObject callGraphQl(String query, Map<String, Object> variables, String url) throws JSONException {
        var testRestTemplate = new TestRestTemplate();
        var headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");
        var body = Map.of("query", query,
                "variables", variables);
        HttpEntity<Map> httpEntity = new HttpEntity(body, headers);
        ResponseEntity<String> response = testRestTemplate.postForEntity(url, httpEntity, String.class);
        return convertStringToJSON(response.getBody());
    }

    private static JSONObject convertStringToJSON(String jsonString) throws JSONException {
        JSONObject json = new JSONObject(jsonString);
        return json;
    }
}
