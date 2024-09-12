package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PassPaymentOutput {
    private String orderId;
    private boolean isInitiated;
    double amount;
}
