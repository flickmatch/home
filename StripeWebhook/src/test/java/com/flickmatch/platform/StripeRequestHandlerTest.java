package com.flickmatch.platform;

import com.amazonaws.services.lambda.runtime.ClientContext;
import com.amazonaws.services.lambda.runtime.CognitoIdentity;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.flickmatch.webhook.StripeRequestHandler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.client.RestTemplate;
import java.io.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

public class StripeRequestHandlerTest {

    private StripeRequestHandler handler;

    @BeforeEach
    public void setup() {
        handler = new StripeRequestHandler();
    }

    @Test
    public void testHandleRequest() throws Exception {

        Context mockContext = createMockContext();
        // Read the JSON data from the file
        Resource resource = new ClassPathResource("event_checkout_complete_sample_payload.json");

        InputStream inputStream = resource.getInputStream();

        // Create a mock OutputStream for capturing the Lambda response
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        // Call the handleRequest method to test it
        handler.handleRequest(inputStream, outputStream, mockContext);

        // Get the response from the OutputStream
        String responseJson = outputStream.toString("UTF-8");
        System.out.println(responseJson);
        //assertEquals("{}", responseJson);

    }

    private Context createMockContext() {
        return new Context() {
            @Override
            public String getAwsRequestId() {
                return null;
            }

            @Override
            public String getLogGroupName() {
                return null;
            }

            @Override
            public String getLogStreamName() {
                return null;
            }

            @Override
            public String getFunctionName() {
                return null;
            }

            @Override
            public String getFunctionVersion() {
                return null;
            }

            @Override
            public String getInvokedFunctionArn() {
                return null;
            }

            @Override
            public CognitoIdentity getIdentity() {
                return null;
            }

            @Override
            public ClientContext getClientContext() {
                return null;
            }

            @Override
            public int getRemainingTimeInMillis() {
                return 0;
            }

            @Override
            public int getMemoryLimitInMB() {
                return 0;
            }

            @Override
            public LambdaLogger getLogger() {
                return new LambdaLogger() {
                    @Override
                    public void log(String message) {
                        System.out.println(message);
                    }

                    @Override
                    public void log(byte[] message) {

                    }
                };
            }
        };
    }
}







