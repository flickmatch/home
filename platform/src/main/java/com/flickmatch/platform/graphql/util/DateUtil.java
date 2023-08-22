package com.flickmatch.platform.graphql.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.TimeZone;

public class DateUtil {
    private DateUtil() {}

    private static final String datePattern = "yyyy-MM-dd";

    private static final SimpleDateFormat formatter = new SimpleDateFormat(datePattern);

    public static String extractDateFromISOFormatString(String startTime) {
        return startTime.substring(0,datePattern.length());
    }

    public static String extractDateFromISOFormatDate(Date date, String localTimeZone) {
        formatter.setTimeZone(TimeZone.getTimeZone(localTimeZone));
        return formatter.format(date);
    }

    public static Date parseDateFromString(String dateTime) throws ParseException {
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd'T'HH:mmZ");
        return parser.parse(dateTime);
    }

    public static String getDateInInternationalFormat(String date) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return LocalDate.parse(date, formatter).format(formatter2);
    }
}
