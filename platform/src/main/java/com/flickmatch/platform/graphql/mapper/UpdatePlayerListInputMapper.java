package com.flickmatch.platform.graphql.mapper;

import com.flickmatch.platform.graphql.input.CreateEventInput;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import lombok.experimental.UtilityClass;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

@UtilityClass
public class UpdatePlayerListInputMapper {

    public CreateEventInput toCreateEventInput(UpdatePlayerListInput updatePlayerListInput,
                                               String cityId,
                                               String sportsVenueId,
                                               String date) throws ParseException {
        return CreateEventInput.builder()
                .sportsVenueId(sportsVenueId)
                .cityId(cityId)
                .startTime(getTimeInISOFormat(date, updatePlayerListInput.getStartTime()))
                .endTime(getTimeInISOFormat(date, updatePlayerListInput.getEndTime()))
                .charges(Double.valueOf(updatePlayerListInput.getCharges()))
                .waitListPlayersCount(5)
                .reservedPlayersCount(getReservePlayerCount(updatePlayerListInput.getFormat()))
                .build();
    }

    private String getTimeInISOFormat(String date, String time) throws ParseException {
        SimpleDateFormat timeFormatter = new SimpleDateFormat("yyyy-MM-dd hh:mm a");
        timeFormatter.setTimeZone(TimeZone.getTimeZone("GMT+5:30"));
        Date isoDate = timeFormatter.parse(date + " " + time);
        SimpleDateFormat isoFormatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mmZ");
        return isoFormatter.format(isoDate);
    }

    private Integer getReservePlayerCount(String format) {
        String playersInATeam = format.toLowerCase().split("v")[0];
        return Integer.parseInt(playersInATeam) * 2;
    }


}
