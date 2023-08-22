package com.flickmatch.platform.graphql.util;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.text.ParseException;
import java.time.format.DateTimeParseException;
import java.util.Date;

import static org.hamcrest.MatcherAssert.assertThat;

class DateUtilTest {

    @Test
    void test_parseDate_WhenValidInput() throws ParseException {
        Date dateTime = DateUtil.parseDateFromString("2023-03-27T20:00+0530");
        assertThat(dateTime.getTime(), Matchers.is(1679927400000L));
    }

    @Test
    void test_extractDateFromStartTime_WhenValidInput() throws ParseException {
        String date = DateUtil.extractDateFromISOFormatString("2023-03-27T20:00+0530");
        assertThat(date, Matchers.is("2023-03-27"));
    }

    @Test
    void test_extractDateFromCurrentTime_WhenValidInput() throws ParseException {
        Date dateTime = DateUtil.parseDateFromString("2023-08-22T22:00-0700");
        String date = DateUtil.extractDateFromISOFormatDate(dateTime, "GMT-7:00");

        assertThat(date, Matchers.is("2023-08-22"));
    }

    @Test
    void test_getDateInIndiaFormat_WhenInputIsValid() {
        String date = DateUtil.getDateInInternationalFormat("19-04-2023");
        assertThat(date, Matchers.equalTo("2023-04-19"));
    }

    @Test
    void test_getDateInIndiaFormat_WhenInputIsInvalid() {
        Assertions.assertThrows(DateTimeParseException.class,
                () ->  DateUtil.getDateInInternationalFormat("2023-04-19"));

    }


}