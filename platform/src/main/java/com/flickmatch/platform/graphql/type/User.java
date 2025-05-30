package com.flickmatch.platform.graphql.type;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class User {
    String email;
    String name;
    String phoneNumber;
    String userId;
    Integer matchesPlayed;
    Integer wins;
    String gameLinks;
}
