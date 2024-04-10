package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RazorPayCallback {
    String razorPaymentId;
    String razorPayOrderId;
    String razorPaySignature;
}
