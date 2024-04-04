package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class RazorPayOutput {
    private String orderId;
    private boolean isInitiated;
}
