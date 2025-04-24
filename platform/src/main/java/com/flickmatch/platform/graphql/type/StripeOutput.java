package com.flickmatch.platform.graphql.type;


import lombok.*;

import java.awt.image.PixelGrabber;

@Data
@NoArgsConstructor
@Builder
@Getter
@Setter
public class StripeOutput {
    private String status;
    private String message;
    private String sessionId;
    private String sessionUrl;

    public StripeOutput(String status, String message, String sessionId, String sessionUrl) {
        this.status = status;
        this.message = message;
        this.sessionId = sessionId;
        this.sessionUrl = sessionUrl;
    }
}