package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

import java.util.Optional;

@Getter
@Builder
public class CreateUserInput {
    String name;
    String email;
    String phoneNumber;
    String location;
}
