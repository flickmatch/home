package com.flickmatch.platform.graphql.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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
}
