package com.flickmatch.platform.proxy;

import com.flickmatch.platform.records.WhatsAppNotification;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.client.RestTemplate;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;

@ExtendWith(MockitoExtension.class)
class WhatsAppProxyTest {

    @Mock
    RestTemplate restTemplate;

    @InjectMocks WhatsAppProxy whatsAppProxy;

    @BeforeEach
    void setUp() {
        ReflectionTestUtils.setField(whatsAppProxy, "nodeServerUrl", "");
    }

    @Test
    public void test_WhenCallIsSuccessful() {
        Mockito.when(restTemplate.postForEntity(anyString(), any(), any())).thenReturn(ResponseEntity.accepted().build());
        whatsAppProxy.sendNotification(createNotificationData());
        Mockito.verify(restTemplate).postForEntity(anyString(), any(), any());
    }

    @Test
    public void test_WhenCallFails() {
        Mockito.when(restTemplate.postForEntity(anyString(), any(), any())).thenReturn(ResponseEntity.internalServerError().build());
        whatsAppProxy.sendNotification(createNotificationData());
        Mockito.verify(restTemplate).postForEntity(anyString(), any(), any());
    }

    private WhatsAppNotification createNotificationData() {
        return new WhatsAppNotification(null, null, null, null, null, null, null, null,null);

    }
}