package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CreateSportsVenueInput {
    String cityId;
    String displayName;
    String googleMapsLink;
}
