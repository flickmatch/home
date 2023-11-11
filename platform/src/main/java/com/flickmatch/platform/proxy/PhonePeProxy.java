package com.flickmatch.platform.proxy;

import com.phonepe.sdk.pg.common.http.PhonePeResponse;
import com.phonepe.sdk.pg.payments.v1.PhonePePaymentClient;
import com.phonepe.sdk.pg.payments.v1.models.request.PgPayRequest;
import com.phonepe.sdk.pg.payments.v1.models.response.PayPageInstrumentResponse;
import com.phonepe.sdk.pg.payments.v1.models.response.PgPayResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PhonePeProxy {

    @Autowired
    private PhonePePaymentClient phonePeClient;

    @Value("${phonepe.merchant.id}")
    private String merchantId;

    /**
     * Calls PhonePe Pay API using sdk
     * https://developer.phonepe.com/v1/reference/pay-api-1
     * https://developer.phonepe.com/v1/reference/java-standard-pay-page
     *
     * @return payment link
     */
    public String initiatePayment() {
        String merchantTransactionId = UUID.randomUUID().toString().substring(0,34);
        long amount = 200;
        String callbackUrl = "https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/payment";
        String merchantUserId = "merchantUserId";

        PgPayRequest pgPayRequest = PgPayRequest.PayPagePayRequestBuilder()
                .merchantId(merchantId)
                .amount(amount)
                .merchantTransactionId(merchantTransactionId)
                .callbackUrl(callbackUrl)
                .callbackMode("REDIRECT")
                .redirectUrl("https://play.flickmatch.in/")
                .redirectMode("REDIRECT")
                .merchantUserId(merchantUserId)
                .build();

        PhonePeResponse<PgPayResponse> payResponse = phonePeClient.pay(pgPayRequest);
        PayPageInstrumentResponse payPageInstrumentResponse = (PayPageInstrumentResponse) payResponse.getData().getInstrumentResponse();
        return payPageInstrumentResponse.getRedirectInfo().getUrl();
    }
}
