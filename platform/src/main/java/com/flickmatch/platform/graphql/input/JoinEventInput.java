package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class JoinEventInput {

    @Deprecated
    String eventId;
    @Deprecated
    String cityId;
    String uniqueEventId;
    PlayerInput player;
}
