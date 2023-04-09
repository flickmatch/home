package com.flickmatch.platform.dynamodb.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;

@DynamoDBTable(tableName="Event")
public class Event {

    // Composite key guide https://medium.com/@leohoc/dynamodb-and-spring-data-a81c546a1305
    @Id
    private EventId eventId;

    private List<EventDetails> eventDetailsList;


    public Event() {}

    public Event(EventId eventId) {
        this.eventId = eventId;
    }

    @DynamoDBHashKey(attributeName="cityId")
    public String getCityId() {
        return this.eventId != null ? this.eventId.getCityId() : null;
    }

    public void setCityId(String cityId) {
        if (this.eventId == null) {
            this.eventId = new EventId();
        }
        this.eventId.setCityId(cityId);
    }

    @DynamoDBRangeKey(attributeName = "date")
    public String getDate() {
        return this.eventId != null ? this.eventId.getDate() : null;
    }

    public void setDate(String date) {
        if (this.eventId == null) {
            this.eventId = new EventId();
        }
        this.eventId.setDate(date);
    }

    @DynamoDBAttribute(attributeName="eventDetailsList")
    public List<EventDetails> getEventDetailsList() {
        return eventDetailsList;
    }

    public void setEventDetailsList(List<EventDetails> eventDetailsList) {
        this.eventDetailsList = eventDetailsList;
    }

    @DynamoDBDocument
    public static class EventDetails {
        Integer index;
        Date startTime;
        Date endTime;
        Double charges;
        Integer reservedPlayersCount;
        Integer waitListPlayersCount;
        String sportName;
        String venueName;
        String venueLocationLink;
        List<PlayerDetails> playerDetailsList;
        //TODO:Add status attribute

        @DynamoDBAttribute(attributeName="index")
        public Integer getIndex() {
            return index;
        }

        public void setIndex(Integer index) {
            this.index = index;
        }

        @DynamoDBAttribute(attributeName="startTime")
        public Date getStartTime() {
            return startTime;
        }

        public void setStartTime(Date startTime) {
            this.startTime = startTime;
        }

        @DynamoDBAttribute(attributeName="endTime")
        public Date getEndTime() {
            return endTime;
        }

        public void setEndTime(Date endTime) {
            this.endTime = endTime;
        }

        @DynamoDBAttribute(attributeName="charges")
        public Double getCharges() {
            return charges;
        }

        public void setCharges(Double charges) {
            this.charges = charges;
        }

        @DynamoDBAttribute(attributeName="reservedPlayersCount")
        public Integer getReservedPlayersCount() {
            return reservedPlayersCount;
        }

        public void setReservedPlayersCount(Integer reservedPlayersCount) {
            this.reservedPlayersCount = reservedPlayersCount;
        }

        @DynamoDBAttribute(attributeName="waitListPlayersCount")
        public Integer getWaitListPlayersCount() {
            return waitListPlayersCount;
        }

        public void setWaitListPlayersCount(Integer waitListPlayersCount) {
            this.waitListPlayersCount = waitListPlayersCount;
        }

        @DynamoDBAttribute(attributeName="sportName")
        public String getSportName() {
            return sportName;
        }

        public void setSportName(String sportName) {
            this.sportName = sportName;
        }

        @DynamoDBAttribute(attributeName="venueName")
        public String getVenueName() {
            return venueName;
        }

        public void setVenueName(String venueName) {
            this.venueName = venueName;
        }

        @DynamoDBAttribute(attributeName="venueLocationLink")
        public String getVenueLocationLink() {
            return venueLocationLink;
        }

        public void setVenueLocationLink(String venueLocationLink) {
            this.venueLocationLink = venueLocationLink;
        }

        @DynamoDBAttribute(attributeName = "playerDetailsList")
        public List<PlayerDetails> getPlayerDetailsList() {
            return playerDetailsList;
        }

        public void setPlayerDetailsList(List<PlayerDetails> playerDetailsList) {
            this.playerDetailsList = playerDetailsList;
        }
    }

    @DynamoDBDocument
    public static class PlayerDetails {
        String name;
        String waNumber;

        @DynamoDBAttribute(attributeName = "name")
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        @DynamoDBAttribute(attributeName = "waNumber")
        public String getWaNumber() {
            return waNumber;
        }

        public void setWaNumber(String waNumber) {
            this.waNumber = waNumber;
        }
    }

    public static class EventId {
        private String cityId;
        //Date in yyyy-MM-dd format
        private String date;

        public EventId() {
        }

        public EventId(String cityId, String date) {
            this.cityId = cityId;
            this.date = date;
        }

        @DynamoDBHashKey(attributeName="cityId")
        public String getCityId() {
            return cityId;
        }

        public void setCityId(String cityId) {
            this.cityId = cityId;
        }

        @DynamoDBRangeKey(attributeName = "date")
        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
        }

    }
}
