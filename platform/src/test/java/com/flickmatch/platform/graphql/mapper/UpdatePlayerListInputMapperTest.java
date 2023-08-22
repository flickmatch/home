package com.flickmatch.platform.graphql.mapper;

import com.flickmatch.platform.graphql.input.CreateEventInput;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.text.ParseException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

class UpdatePlayerListInputMapperTest {

    public static final String CITY_ID = "1";
    public static final String SPORTS_VENUE_ID = "1234";
    public static final String DATE = "2023-04-27";
    public static final String LOCAL_TIMEZONE = "GMT+5:30";

    @Test
    void test_toCreateEventInput_WhenInputIsValid_ReturnsResponse() throws ParseException {
        CreateEventInput createEventInput = UpdatePlayerListInputMapper
                .toCreateEventInput(buildPlayerListInput(), CITY_ID, SPORTS_VENUE_ID, DATE, LOCAL_TIMEZONE);
        assertThat(createEventInput.getCharges(), is(200D));

        assertThat(createEventInput.getStartTime(), is(equalTo("2023-04-27T20:30+0530")));
        assertThat(createEventInput.getEndTime(), is(equalTo("2023-04-27T21:30+0530")));
        assertThat(createEventInput.getReservedPlayersCount(), is(10));
    }

    @Test
    void test_toCreateEventInput_WhenInputIsValid_ThrowsException() {
        Assertions.assertThrows(ParseException.class, () -> UpdatePlayerListInputMapper
                .toCreateEventInput(buildInvalidPlayerListInput(), CITY_ID, SPORTS_VENUE_ID, DATE, LOCAL_TIMEZONE));
    }

    private UpdatePlayerListInput buildPlayerListInput() {
        return UpdatePlayerListInput.builder()
                .charges("200")
                .startTime("08:30 PM")
                .endTime("09:30 PM")
                .format("5v5")
                .build();
    }

    private UpdatePlayerListInput buildInvalidPlayerListInput() {
        return UpdatePlayerListInput.builder()
                .charges("200")
                .startTime("8 30 Pm")
                .endTime("9 30 Pm")
                .format("5v5")
                .build();
    }

}