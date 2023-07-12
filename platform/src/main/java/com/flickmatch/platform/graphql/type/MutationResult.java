package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MutationResult {
    private boolean isSuccessful;
    private String errorMessage;

}
