package com.flickmatch.platform.records;

import lombok.extern.log4j.Log4j2;

import java.util.ArrayList;
import java.util.List;

@Log4j2
//TODO: Using this for development, Create a type instead of record when DB is integrated
public record Moderator(String moderatorId, String firstName, String lastName, int contactNumber) {

    private static List<Moderator> moderators = new ArrayList<>();

    public static void addModerator(final Moderator moderator) {
        moderators.add(moderator);
    }

    public static Moderator getModerator(final String moderatorId) {
        return moderators.stream()
                .filter(moderator -> moderator.moderatorId.equals(moderatorId))
                .findFirst()
                .orElse(null);
    }

    public static List<Moderator> getModerators() {
        log.info(moderators.toString());
        return moderators;
    }
}
