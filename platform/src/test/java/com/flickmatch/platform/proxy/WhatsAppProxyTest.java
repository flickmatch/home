package com.flickmatch.platform.proxy;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;

@ExtendWith(MockitoExtension.class)
class WhatsAppProxyTest {

    @Mock
    RestTemplate restTemplate;

    @InjectMocks WhatsAppProxy whatsAppProxy;

    @Test
    public void test_WhenCallIsSuccessful() {
        Mockito.when(restTemplate.getForEntity(anyString(), any())).thenReturn(ResponseEntity.accepted().build());
        whatsAppProxy.sendNotification();
        Mockito.verify(restTemplate).getForEntity(anyString(), any());
    }

    @Test
    public void test_WhenCallFails() {
        Mockito.when(restTemplate.getForEntity(anyString(), any())).thenReturn(ResponseEntity.internalServerError().build());
        whatsAppProxy.sendNotification();
        Mockito.verify(restTemplate).getForEntity(anyString(), any());
    }
}