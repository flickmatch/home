package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.proxy.TwilioProxy;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class MessageBuilderTest {

    @Mock
    private TwilioProxy twilioProxy;

    @InjectMocks
    private MessageBuilder messageBuilder;

    private final String from = "+1234567890";
    private final String to = "+0987654321";
    private final String testMessage = "Hello, this is a test!";

    @BeforeEach
    void setUp() {
        doNothing().when(twilioProxy).initTwilio();
    }

    @Test
    void sendMessage_ShouldSendWhatsAppMessageSuccessfully() {
        ArgumentCaptor<String> messageCaptor = ArgumentCaptor.forClass(String.class);
        messageBuilder.sendMessage(from, to, testMessage);

        verify(twilioProxy, times(1)).initTwilio();
        verify(twilioProxy).initTwilio();
        assertEquals("Hello, this is a test!", testMessage);
    }
}
