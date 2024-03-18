package com.flickmatch.platform.rest;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.PaymentRequest;
import com.flickmatch.platform.graphql.builder.EventBuilder;
import com.flickmatch.platform.graphql.builder.PaymentRequestBuilder;
import com.flickmatch.platform.proxy.WhatsAppProxy;
import net.minidev.json.writer.JsonReader;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.json.GsonJsonParser;

import java.io.FileReader;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PhonePeCallBackControllerTest {

    @Mock
    PaymentRequestBuilder paymentRequestBuilder;
    @Mock
    EventBuilder eventBuilder;
    @Mock
    WhatsAppProxy whatsAppProxy;

    @InjectMocks
    PhonePeCallBackController phonePeCallBackController;

    private static final String SUCCESS_RESPONSE = "ewogICJzdWNjZXNzIjogdHJ1ZSwKICAiY29kZSI6ICJQQVlNRU5UX1NVQ0NFU1MiLAogICJtZXNzYWdlIjogIllvdXIgcmVxdWVzdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgY29tcGxldGVkLiIsCiAgImRhdGEiOiB7CiAgICAibWVyY2hhbnRJZCI6ICJQR1RFU1RQQVlVQVQiLAogICAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICI5MjAxNmFlMy1hMDgwLTQyZWUtYTNkNC1jYTE3MTg0Mzc0IiwKICAgICJ0cmFuc2FjdGlvbklkIjogIlQyMTExMjIxNDM3NDU2MTkwMTcwMzc5IiwKICAgICJhbW91bnQiOiAxMDAsCiAgICAic3RhdGUiOiAiQ09NUExFVEVEIiwKICAgICJyZXNwb25zZUNvZGUiOiAiU1VDQ0VTUyIsCiAgICAicGF5bWVudEluc3RydW1lbnQiOiB7CiAgICAgICJ0eXBlIjogIlVQSSIsCiAgICAgICJ1dHIiOiAiMjA2Mzc4ODY2MTEyIgogICAgfQogIH0KfQo";
    private static final String FAILURE_RESPONSE = "ewogICJzdWNjZXNzIjogdHJ1ZSwKICAiY29kZSI6ICJQQVlNRU5UX0VSUk9SIiwKICAibWVzc2FnZSI6ICJQYXltZW50IEZhaWxlZCIsCiAgImRhdGEiOiB7CiAgICAibWVyY2hhbnRJZCI6ICJQR1RFU1RQQVlVQVQiLAogICAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJlMGJhZGYzOC0yZjAyLTQzN2EtOTI4ZC00OThkMzQxY2Q2IiwKICAgICJ0cmFuc2FjdGlvbklkIjogIlQyMTExMjIxNDM3NDU2MTkwMTcwMzc5IiwKICAgICJhbW91bnQiOiAxMDAsCiAgICAic3RhdGUiOiAiRkFJTEVEIiwKICAgICJyZXNwb25zZUNvZGUiOiAiWlUiLAogICAgInBheW1lbnRJbnN0cnVtZW50IjogbnVsbAogIH0KfQo";

    @Test
    public void test_processCallBack() {
        CallBackResponse callBackResponse = new CallBackResponse();
        callBackResponse.setResponse(SUCCESS_RESPONSE);
        when(paymentRequestBuilder.getPaymentRequest(anyString())).thenReturn(PaymentRequest.builder().build());
        when(eventBuilder.joinEvent(any(PaymentRequest.class))).thenReturn(Event.builder().build());
        when(paymentRequestBuilder.updatePaymentRequestStatus(any(PaymentRequest.class), eq(true)))
                .thenReturn(null);
        doNothing().when(whatsAppProxy).sendNotification(any());
        phonePeCallBackController.processCallBack(callBackResponse, "");
    }

    @Test
    public void test_processCallBack_duplicateEvent() {
        // arrange
        CallBackResponse callBackResponse = new CallBackResponse();
        callBackResponse.setResponse(SUCCESS_RESPONSE);
        when(paymentRequestBuilder.getPaymentRequest(anyString()))
                .thenReturn(PaymentRequest.builder().status("PAID").build());

        // act
        phonePeCallBackController.processCallBack(callBackResponse, "");

        // verify no invocation
        verify(paymentRequestBuilder, times(0))
                .updatePaymentRequestStatus(any(PaymentRequest.class), eq(true));
        verify(whatsAppProxy, times(0)).sendNotification(any());
    }

    @Test
    public void test_processCallback_nullPaymentRequest() {
        // arrange
        CallBackResponse callBackResponse = new CallBackResponse();
        callBackResponse.setResponse(SUCCESS_RESPONSE);
        when(paymentRequestBuilder.getPaymentRequest(anyString()))
                .thenReturn(null);

        // act
        phonePeCallBackController.processCallBack(callBackResponse, "");

        // verify no invocation
        verify(paymentRequestBuilder, times(0))
                .updatePaymentRequestStatus(any(PaymentRequest.class), eq(true));
        verify(whatsAppProxy, times(0)).sendNotification(any());
    }

    @Test
    public void test_processCallBack_whenPaymentFails() {
        CallBackResponse callBackResponse = new CallBackResponse();
        callBackResponse.setResponse(FAILURE_RESPONSE);
        when(paymentRequestBuilder.getPaymentRequest(anyString())).thenReturn(PaymentRequest.builder().build());
        when(paymentRequestBuilder.updatePaymentRequestStatus(any(PaymentRequest.class), eq(false)))
                .thenReturn(null);
        phonePeCallBackController.processCallBack(callBackResponse, "");
        verify(paymentRequestBuilder).updatePaymentRequestStatus(any(PaymentRequest.class), eq(false));
    }


}