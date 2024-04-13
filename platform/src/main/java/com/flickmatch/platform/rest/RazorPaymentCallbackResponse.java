package com.flickmatch.platform.rest;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class RazorPaymentCallbackResponse {
    String razorpay_payment_id;
    String razorpay_order_id;
    String razorpay_signature;
}
