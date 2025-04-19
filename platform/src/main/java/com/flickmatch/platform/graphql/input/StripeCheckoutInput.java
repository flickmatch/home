package com.flickmatch.platform.graphql.input;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class StripeCheckoutInput {
    private Long amount;
    private Long quantity;
    private String name;
    private String currency;


}
