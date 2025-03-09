package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.proxy.TwilioProxy;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Log4j2
@Service
public class MessageBuilder {

    @Autowired
    private TwilioProxy twilioProxy;

    public void sendMessage(String from, String to, String message) {
        log.info("Sending message from: {} to: {}", from, to);
        try {
            twilioProxy.initTwilio();
//            System.out.println(message);
            Message whatsappMessage = Message.creator(
                    new PhoneNumber("whatsapp:" + to.trim()),   // Recipient
                    new PhoneNumber("whatsapp:" + from.trim()), // Twilio WhatsApp Business Number
                    message
            ).create();

            log.info("WhatsApp message sent successfully, SID: {}", whatsappMessage.getSid());

        } catch (Exception e) {
            log.error("Failed to send message: {}", e.getMessage(), e);
        }

    }
}