package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class User {
    private String email;
    private Integer wins;
}
