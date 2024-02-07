package com.flickmatch.platform.proxy;

import com.phonepe.sdk.pg.common.http.PhonePeResponse;
import com.phonepe.sdk.pg.payments.v1.PhonePePaymentClient;
import com.phonepe.sdk.pg.payments.v1.models.request.PgPayRequest;
import com.phonepe.sdk.pg.payments.v1.models.response.PayPageInstrumentResponse;
import com.phonepe.sdk.pg.payments.v1.models.response.PgPayResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PhonePeProxy {

    private static final String REDIRECT_URL = "https://play.flickmatch.in/match-queues#%s";
    private static final String CALLBACK_URL = "https://service.flickmatch.in/platform-0.0.1-SNAPSHOT/payment";
    private static final String MERCHANT_USER_ID = "merchantUserId";
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
    public String initiatePayment(final String merchantTransactionId, final long amount, final String uniqueEventId) {

        PgPayRequest pgPayRequest = PgPayRequest.PayPagePayRequestBuilder()
                .merchantId(merchantId)
                .amount(amount)
                .merchantTransactionId(merchantTransactionId)
                .callbackUrl(CALLBACK_URL)
                .callbackMode("REDIRECT")
                .redirectUrl(String.format(REDIRECT_URL, uniqueEventId))
                .redirectMode("REDIRECT")
                .merchantUserId(MERCHANT_USER_ID)
                .build();

        PhonePeResponse<PgPayResponse> payResponse = phonePeClient.pay(pgPayRequest);
        PayPageInstrumentResponse payPageInstrumentResponse = (PayPageInstrumentResponse) payResponse.getData().getInstrumentResponse();
        return payPageInstrumentResponse.getRedirectInfo().getUrl();
    }
}
