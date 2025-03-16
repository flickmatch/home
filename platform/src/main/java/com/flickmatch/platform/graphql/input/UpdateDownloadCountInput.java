package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UpdateDownloadCountInput {
    String uniqueEventId;
    Integer downloadCounter;
}
