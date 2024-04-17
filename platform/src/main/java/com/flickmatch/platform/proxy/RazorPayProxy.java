package com.flickmatch.platform.proxy;

import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class RazorPayProxy {
    @Value("${razorpay.key.id}")
    private String keyId;

    @Value("${razorpay.key.secret}")
    private String secret;

    public RazorpayClient getRazorPayClient() throws RazorpayException {
        return new RazorpayClient(keyId, secret);
    }

}
