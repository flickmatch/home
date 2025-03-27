package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SendMessageInput {
    private String from;
    private String to;
    private String message;
}
