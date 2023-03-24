package com.flickmatch.platform.graphql.input;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class CreateSportsVenueInput {
    String name;
    String googleMapsLink;
    String coordinates;
    int contactNumber;
    List<String> availableSports;
}
