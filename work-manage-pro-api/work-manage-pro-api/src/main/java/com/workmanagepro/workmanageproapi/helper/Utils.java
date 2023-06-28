package com.workmanagepro.workmanageproapi.helper;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Utils {

    public Utils() {

    }

    private static final String INPUT_DATE_FORMAT = "yyyy/MM/dd";
    private static final String OUTPUT_DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";

    public static String convertDateFormat(String inputDate) {
        var localDateTime = LocalDateTime
                .parse(inputDate, DateTimeFormatter.ofPattern(INPUT_DATE_FORMAT));
        return localDateTime.format(DateTimeFormatter.ofPattern(OUTPUT_DATE_FORMAT));
    }

}
