package com.flickmatch.platform.graphql.type;

import lombok.Builder;

@Builder
public class MutationResult {
    private boolean isSuccessful;
    private String errorMessage;
}
