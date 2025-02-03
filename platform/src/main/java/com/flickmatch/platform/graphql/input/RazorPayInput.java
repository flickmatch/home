package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.Optional;

@Getter
@Builder
public class RazorPayInput {

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
