package com.flickmatch.platform.graphql.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class DateUtil {
    private DateUtil() {}

    private static SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

    public static String extractDateFromISOFormatString(String startTime) throws ParseException {
        return formatter.format(parseDateFromString(startTime));
    }

    public static String extractDateFromISOFormatDate(Date date) {
        return formatter.format(date);
    }

    public static Date parseDateFromString(String dateTime) throws ParseException {
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd'T'HH:mmZ");
        return parser.parse(dateTime);
    }

    public static Date parseDateFromInput(String date) throws ParseException {
        return formatter.parse(date);
    }

    public static Date parseTimeFromInput(String startTime) throws ParseException {
        SimpleDateFormat timeFormat = new SimpleDateFormat("h:mma");
        return timeFormat.parse(startTime);
    }

    public static String getDateInInternationalFormat(String date) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return LocalDate.parse(date, formatter).format(formatter2);
    }
}
