package com.flickmatch.platform.proxy;

import com.phonepe.sdk.pg.common.http.PhonePeResponse;
import com.phonepe.sdk.pg.payments.v1.PhonePePaymentClient;
import com.phonepe.sdk.pg.payments.v1.models.request.PgPayRequest;
import com.phonepe.sdk.pg.payments.v1.models.response.PayPageInstrumentResponse;
import com.phonepe.sdk.pg.payments.v1.models.response.PgPayResponse;
import com.phonepe.sdk.pg.payments.v1.models.response.RedirectInfo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class PhonePeProxyTest {

    @Mock
    PhonePePaymentClient phonePeClient;
    @InjectMocks
    PhonePeProxy phonePeProxy;

    private static final String REDIRECT_URL = "https://play.flickmatch.in/match-queues#uniqueEventId";
    private static final String CALLBACK_URL = "https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/payment";
    private static final String MERCHANT_USER_ID = "merchantUserId";

    @BeforeEach
    void setUp() {
        ReflectionTestUtils.setField(phonePeProxy, "merchantId", "merchantId");
    }

    @Test
    public void testInitiatePayment_whenPhonePeCallIsSuccessful() {
        String merchantTransactionId = "merchantTransactionId";
        String uniqueEventId = "uniqueEventId";
        long amount = 10L;
        PgPayRequest pgPayRequest = PgPayRequest.PayPagePayRequestBuilder()
                .merchantId("merchantId")
                .amount(amount)
                .merchantTransactionId(merchantTransactionId)
                .callbackUrl(CALLBACK_URL)
                .callbackMode("REDIRECT")
                .redirectUrl(REDIRECT_URL)
                .redirectMode("REDIRECT")
                .merchantUserId(MERCHANT_USER_ID)
                .build();
        PhonePeResponse<PgPayResponse> payResponse =
                new PhonePeResponse<>(true, "code", "message", PgPayResponse.builder()
                        .instrumentResponse(PayPageInstrumentResponse.builder()
                                .redirectInfo(RedirectInfo.builder().url("url").build()).build()).build());
        Mockito.when(phonePeClient.pay(pgPayRequest)).thenReturn(payResponse);
        assertEquals("url", phonePeProxy.initiatePayment(merchantTransactionId, 10, uniqueEventId));
    }

}