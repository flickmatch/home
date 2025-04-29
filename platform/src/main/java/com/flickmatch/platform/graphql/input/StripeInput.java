package com.flickmatch.platform.graphql.input;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class StripeInput {
    String uniqueEventId;
    List<PlayerInput> playerInputList;
    String currency;
    String email;
    String phoneNumber;
    String redirectUrl;
    String venuePinCode;

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}
