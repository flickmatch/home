package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.input.InitiatePaymentInput;
import com.flickmatch.platform.graphql.type.InitiatePaymentOutput;
import com.phonepe.sdk.pg.Env;
import com.phonepe.sdk.pg.common.http.PhonePeResponse;
import com.phonepe.sdk.pg.payments.v1.PhonePePaymentClient;
import com.phonepe.sdk.pg.payments.v1.models.request.PgPayRequest;
import com.phonepe.sdk.pg.payments.v1.models.response.PayPageInstrumentResponse;
import com.phonepe.sdk.pg.payments.v1.models.response.PgPayResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import java.util.UUID;

@Controller
@Log4j2
public class PaymentController {

    @MutationMapping
    public InitiatePaymentOutput initiatePayment(@Argument InitiatePaymentInput input) {
        String paymentLink = "https://example.com/payment/link";
        try {
            paymentLink = initiate();
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        InitiatePaymentOutput output = new InitiatePaymentOutput(paymentLink);
        output.setPaymentLink(paymentLink);
        return output;
    }

    /*
    Calls PhonePe Pay API using sdk
    https://developer.phonepe.com/v1/reference/pay-api-1
    https://developer.phonepe.com/v1/reference/java-standard-pay-page
     */
    private String initiate() {
        String merchantId = "M1FPXNBFIGDG";
        String saltKey = "e7a5693b-0ccf-47ac-a258-c5d77e701e2c";
        Integer saltIndex = Integer.valueOf(2);
        Env env = Env.PROD;
        boolean shouldPublishEvents = true;
        PhonePePaymentClient phonepeClient = new PhonePePaymentClient(merchantId, saltKey, saltIndex, env, shouldPublishEvents);

        String merchantTransactionId = UUID.randomUUID().toString().substring(0,34);
        long amount = 200;
        String callbackUrl = "https://service.flickmatch.in:8443/platform-0.0.1-SNAPSHOT/payment";
        String merchantUserId = "merchantUserId";

        PgPayRequest pgPayRequest = PgPayRequest.PayPagePayRequestBuilder()
                .amount(amount)
                .merchantId(merchantId)
                .merchantTransactionId(merchantTransactionId)
                .callbackUrl(callbackUrl)
                .callbackMode("REDIRECT")
                .redirectUrl("https://play.flickmatch.in/")
                .redirectMode("REDIRECT")
                .merchantUserId(merchantUserId)
                .build();

        PhonePeResponse<PgPayResponse> payResponse = phonepeClient.pay(pgPayRequest);
        PayPageInstrumentResponse payPageInstrumentResponse = (PayPageInstrumentResponse) payResponse.getData().getInstrumentResponse();
        return payPageInstrumentResponse.getRedirectInfo().getUrl();
    }
}
