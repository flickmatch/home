package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class MutationResultForUpdatePlayerList {
    private boolean isSuccessful;
    private String errorMessage;
    private List<Player> updatedPlayerList;

}
