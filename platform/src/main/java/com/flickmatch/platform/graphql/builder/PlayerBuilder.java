package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.City;
import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.repository.CityRepository;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.dynamodb.repository.SportsVenueRepository;
import com.flickmatch.platform.graphql.input.UpdatePlayerListInput;
import com.flickmatch.platform.graphql.input.PlayerInput;
import com.flickmatch.platform.graphql.mapper.UpdatePlayerListInputMapper;
import com.flickmatch.platform.graphql.util.DateUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeParseException;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Log4j2
@Service

public class PlayerBuilder {

    @Autowired
    EventBuilder eventBuilder;

    private final EventRepository eventRepository;
    private final SportsVenueRepository sportsVenueRepository;
    private final CityRepository cityRepository;

    public PlayerBuilder(EventRepository eventRepository,
                         SportsVenueRepository sportsVenueRepository,
                         CityRepository cityRepository) {
        this.eventRepository = eventRepository;
        this.sportsVenueRepository = sportsVenueRepository;
        this.cityRepository = cityRepository;
    }

    /**
     * Adds players from whatsApp message.
     *
     * @param input the input
     * @throws ParseException the parse exception
     */
    public void updatePlayerList(UpdatePlayerListInput input) throws ParseException {
        validateStartTime(input.getStartTime());
        String date = validateAndFormatDate(input.getDate());
        AtomicReference<String> cityId = new AtomicReference<>();
        AtomicReference<String> sportsVenueId = new AtomicReference<>();
        //Todo: This will not be required if we can pass cityId, sportsVenueId in input
        sportsVenueRepository.findAll().forEach(sportsVenues -> sportsVenues.getSportsVenuesInCity().forEach(sportsVenue -> {
            if (compareVenueName(sportsVenue.getDisplayName(), input.getVenueName())) {
                cityId.set(sportsVenues.getCityId());
                sportsVenueId.set(sportsVenue.getSportsVenueId());
            }
        }));

        if (!StringUtils.hasLength(cityId.get())) {
            throw new IllegalArgumentException("Invalid Venue selected");
        }
        Optional<Event> eventsInCity = eventRepository.findById(new Event.EventId(cityId.get(), date));

        Optional<Event.EventDetails> selectedEvent = Optional.empty();
        if (eventsInCity.isPresent()) {
            selectedEvent = getSelectedEvent(input, eventsInCity);
        }

        if (selectedEvent.isEmpty()) {
            Optional<City> city = cityRepository.findById(cityId.get());
            eventsInCity = Optional.of(eventBuilder.createEvent(
                    UpdatePlayerListInputMapper.toCreateEventInput(input, cityId.get(), sportsVenueId.get(), date,
                            city.get().getLocalTimeZone()),
                    false));
            selectedEvent = getSelectedEvent(input, eventsInCity);
        }
        selectedEvent.ifPresentOrElse(eventDetails -> {
                    // validPlayerDetailsList represent players that already paid using website
                    List<Event.PlayerDetails> validPlayerDetailsList = eventDetails.getPlayerDetailsList().stream()
                            .filter(this::isWANumberValid)
                            .collect(Collectors.toList());
                    // Build the new player details list using input
                    List<Event.PlayerDetails> newPlayerDetailsList = buildPlayerList(input.getReservedPlayersList(),
                            input.getWaitListPlayers());
                    //merge new list
                    validPlayerDetailsList.addAll(newPlayerDetailsList);

                    eventDetails.setPlayerDetailsList(validPlayerDetailsList);
                },
                () -> {
                    throw new IllegalArgumentException("Invalid Event selected");
                });
        eventRepository.save(eventsInCity.get());

    }

    private Optional<Event.EventDetails> getSelectedEvent(UpdatePlayerListInput input, Optional<Event> eventsInCity) {
        return eventsInCity.get().getEventDetailsList().stream()
                .filter(eventDetails -> compareVenueName(eventDetails.getVenueName(), input.getVenueName()))
                .filter(eventDetails ->
                        input.getStartTime().equalsIgnoreCase(getFormattedEventTime(eventDetails.getStartTime())))
                .findFirst();
    }

    public List<Event.PlayerDetails> buildPlayerList(List<PlayerInput> reservedPlayersList,
                                                     List<PlayerInput> waitListPlayers) {
        reservedPlayersList = reservedPlayersList.stream()
                .filter(playerInput -> !StringUtils.isEmpty(playerInput.getName())).toList();
        waitListPlayers = waitListPlayers.stream()
                .filter(playerInput -> !StringUtils.isEmpty(playerInput.getName())).toList();

        if (CollectionUtils.isEmpty(reservedPlayersList) && CollectionUtils.isEmpty(waitListPlayers)) {
            throw new IllegalArgumentException("Invalid player list");
        }
        List<Event.PlayerDetails> playerDetailsList = new ArrayList<>();
        reservedPlayersList.forEach(reservedPlayer -> {
            Event.PlayerDetails playerDetails = Event.PlayerDetails.builder()
                    .name(reservedPlayer.getName())
                    .build();
            playerDetailsList.add(playerDetails);
        });
        waitListPlayers.forEach(waitListPlayer -> {
            Event.PlayerDetails playerDetails = Event.PlayerDetails.builder()
                    .name(waitListPlayer.getName())
                    .build();
            playerDetailsList.add(playerDetails);
        });
        return playerDetailsList;
    }

    private String validateAndFormatDate(String date) {
        try {
            return DateUtil.getDateInInternationalFormat(date);
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("Date is invalid, Please check format");
        }
    }

    private void validateStartTime(String time) {
        try {
            SimpleDateFormat timeFormat = new SimpleDateFormat("hh:mm a");
             timeFormat.parse(time);

        } catch (Exception e) {
            throw new IllegalArgumentException("Time is invalid, Please check format");
        }
    }

    private String getFormattedEventTime(Date startTime) {
        SimpleDateFormat timeFormatter = new SimpleDateFormat("hh:mm a");
        timeFormatter.setTimeZone(TimeZone.getTimeZone("GMT+5:30"));
        //System.out.println(timeFormatter.format(startTime));
        return timeFormatter.format(startTime);
    }

    private boolean compareVenueName(String venueName, String inputName) {
        return venueName.replace(" ", "")
                .equalsIgnoreCase(inputName.replace(" ", ""));
    }
      private boolean isWANumberValid(Event.PlayerDetails playerDetails) {
          return playerDetails.getWaNumber() != null && playerDetails.getWaNumber().length() >= 10;
    }
}
