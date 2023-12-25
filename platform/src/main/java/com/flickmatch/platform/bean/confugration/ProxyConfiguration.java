package com.flickmatch.platform.bean.confugration;

import com.phonepe.sdk.pg.Env;
import com.phonepe.sdk.pg.payments.v1.PhonePePaymentClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ProxyConfiguration {

    @Value("${phonepe.merchant.id}")
    private String merchantId;
    @Value("${phonepe.saltkey}")
    private String saltKey;
    @Value("${phonepe.saltkey.index}")
    private Integer saltIndex;

    @Bean
    PhonePePaymentClient phonePePaymentClient() {
        return new PhonePePaymentClient(merchantId, saltKey, saltIndex, Env.PROD, true);
    }

    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
