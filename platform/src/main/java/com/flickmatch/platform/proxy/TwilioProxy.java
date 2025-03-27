package com.flickmatch.platform.proxy;
import com.twilio.Twilio;
import jakarta.annotation.PostConstruct;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class TwilioProxy {

    @Value("${account.sid}")
    private String ACCOUNT_SID;
    @Value("${auth.token}")
    private String AUTH_TOKEN;

    @PostConstruct
    public void initTwilio() {
        Twilio.init(ACCOUNT_SID,AUTH_TOKEN);
    }
}
