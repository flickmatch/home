package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RegisterModeratorInput {
    private String firstName;
    private String lastName;
    private int contactNumber;
}
