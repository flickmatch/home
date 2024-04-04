package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class RazorPayInput {

    String uniqueEventId;
    List<PlayerInput> playerInputList;
}
