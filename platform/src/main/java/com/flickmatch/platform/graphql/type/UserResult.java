package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserResult {
    private String userId;
    private boolean isSuccessful;
}
