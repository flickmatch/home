package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CreateUserInput {
    String name;
    String email;
    String phoneNumber;
}
