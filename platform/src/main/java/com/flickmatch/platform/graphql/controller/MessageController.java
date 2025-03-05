package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.MessageBuilder;
import com.flickmatch.platform.graphql.input.SendMessageInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import com.flickmatch.platform.graphql.type.UserResult;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@Log4j2
public class MessageController {

    private final MessageBuilder messageBuilder;

    @Autowired
    public MessageController(MessageBuilder messageBuilder) {
        this.messageBuilder = messageBuilder;
    }

    @MutationMapping
    public MutationResult sendMessage(@Argument SendMessageInput input) {
        log.info("Received request to send message with input: {}", input);
        try {
            messageBuilder.sendMessage(input.getFrom(), input.getTo(), input.getMessage());
            log.info("Message sent successfully.");
            return MutationResult.builder()
                    .isSuccessful(true)
                    .build();
        } catch (Exception e) {
            log.error("Failed to send message: {}", e.getMessage(), e);
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage(e.getMessage())
                    .build();
        }
    }
}
