package com.flickmatch.platform.graphql.type;

import lombok.Builder;

@Builder
public class Player {
    String firstName;
    String lastName;
    int whatsAppNumber;
}
