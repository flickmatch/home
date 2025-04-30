package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Event;
import com.flickmatch.platform.dynamodb.model.PaymentRequest;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import com.flickmatch.platform.dynamodb.repository.CityRepository;
import com.flickmatch.platform.dynamodb.repository.EventRepository;
import com.flickmatch.platform.graphql.input.CreateEventInput;
import com.flickmatch.platform.graphql.input.JoinEventInput;
import com.flickmatch.platform.graphql.input.UpdateEventDetailsInput;
import com.flickmatch.platform.graphql.input.UpdateEventScoreInput;
import com.flickmatch.platform.graphql.type.City;
import com.flickmatch.platform.graphql.type.Player;
import com.flickmatch.platform.graphql.type.SportsVenue;
import com.flickmatch.platform.graphql.type.StripePaymentLink;
import com.flickmatch.platform.graphql.util.DateUtil;
import com.flickmatch.platform.records.ParsedUniqueEventId;
import com.flickmatch.platform.records.WhatsAppNotification;
import lombok.extern.log4j.Log4j2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import static java.lang.String.format;

@Service

public class EventBuilder {

    private static final String CLIENT_REFERENCE_ID = "?client_reference_id=";
    private static final Logger log = LoggerFactory.getLogger(EventBuilder.class);

    EventRepository eventRepository;
    CityRepository cityRepository;

    @Autowired
    SportsVenueBuilder sportsVenueBuilder;
    @Autowired
    CityBuilder cityBuilder;

    public EventBuilder(EventRepository eventRepository, CityRepository cityRepository) {
        this.eventRepository = eventRepository;
        this.cityRepository = cityRepository;
    }

    public Event createEvent(CreateEventInput input, boolean shouldValidateStartTime) throws ParseException {
        if (shouldValidateStartTime) {
            isStartTimeInPast(DateUtil.parseDateFromString(input.getStartTime()));
        }
        String date = DateUtil.extractDateFromISOFormatString(input.getStartTime());
        Optional<Event> eventsInCity = eventRepository.findById(new Event.EventId(input.getCityId(), date));
        if (eventsInCity.isPresent()) {
            List<Event.EventDetails> eventDetailsList = eventsInCity.get().getEventDetailsList();
            eventDetailsList.add(buildEventDetails(input, eventDetailsList.size() + 1));
            return eventRepository.save(eventsInCity.get());
        } else {
            Event newEvent = new Event();
            newEvent.setCityId(input.getCityId());
            newEvent.setDate(date);
            newEvent.setEventDetailsList(List.of(buildEventDetails(input, 1)));
            return eventRepository.save(newEvent);
        }
    }

    public void joinEvent(JoinEventInput input) {
        ParsedUniqueEventId parsedUniqueEventId = null;
        if (StringUtils.hasText(input.getUniqueEventId())) {
            parsedUniqueEventId = parseUniqueEventId(input.getUniqueEventId());
        } else {
            parsedUniqueEventId = parseUniqueEventId(input.getCityId() + "-" + input.getEventId());
        }
        Event.PlayerDetails playerDetails = Event.PlayerDetails.builder()
                .name(input.getPlayer().getName())
                .waNumber(input.getPlayer().getWaNumber())
                .teamColor(input.getPlayer().getTeamColor())
                .build();
        addPlayersInEvent(parsedUniqueEventId, List.of(playerDetails));
    }

    public Event joinEvent(final PaymentRequest paymentRequest) {
        return addPlayersInEvent(parseUniqueEventId(paymentRequest.getUniqueEventId()),
                paymentRequest.getPlayerDetailsList());
    }

    public Event joinEventRazorPayment(final RazorPaymentRequest paymentRequest) {
        return addPlayersInEvent(parseUniqueEventId(paymentRequest.getUniqueEventId()),
                paymentRequest.getPlayerDetailsList());
    }

    public List<com.flickmatch.platform.graphql.type.Event> getEvents(String cityId, String localTimeZone) {
        Date currentTime = new Date(System.currentTimeMillis());
        List<com.flickmatch.platform.graphql.type.Event> eventList = new ArrayList<>();
        final int GET_EVENT_DAYS = 7;
        final int LOOKBACK_DAYS = 2;

        // Calculate date range
        Date startDate = Date.from(currentTime.toInstant().minus(LOOKBACK_DAYS, ChronoUnit.DAYS));
        Date endDate = Date.from(currentTime.toInstant().plus(GET_EVENT_DAYS - 1, ChronoUnit.DAYS));

        String startFormattedDate = DateUtil.extractDateFromISOFormatDate(startDate, localTimeZone);
        String endFormattedDate = DateUtil.extractDateFromISOFormatDate(endDate, localTimeZone);

        // log.info(String.format("Fetching events for cityId %s from %s to %s", cityId,
        // startFormattedDate, endFormattedDate));

        // Fetch all events within the date range
        List<Event> eventsInRange = eventRepository.findByEventIdCityIdAndEventIdDateBetween(cityId, startFormattedDate,
                endFormattedDate);
        // System.out.println("total events retrieved= " + eventsInRange.size());

        for (Event event : eventsInRange) {
            String eventDate = event.getDate();
            List<com.flickmatch.platform.graphql.type.Event> dailyEventList = event.getEventDetailsList().stream()
                    .filter(eventDetails -> eventDetails.getStartTime().after(startDate)
                            && eventDetails.getEndTime().before(endDate))
                    .map(eventDetails -> mapEventToGQLType(eventDetails, eventDate, localTimeZone, cityId))
                    .toList();
            eventList.addAll(dailyEventList);
        }
        return eventList;
    }

    // uniqueEventId is of the form cityId-date-index , e.g.: 7-2024-07-21-1.
    public com.flickmatch.platform.graphql.type.Event getEventById(String uniqueEventId) {
        ParsedUniqueEventId parsedUniqueEventId = parseUniqueEventId(uniqueEventId);
        try {
            Optional<Event> eventInCity = eventRepository
                    .findById(new Event.EventId(parsedUniqueEventId.cityId(), parsedUniqueEventId.date()));
            if (eventInCity.isPresent()) {
                Event event = eventInCity.get();
                List<Event.EventDetails> eventDetailsList = event.getEventDetailsList();
                int index = parsedUniqueEventId.index() - 1; // convert to zero-based index

                if (index >= 0 && index < eventDetailsList.size()) {
                    Event.EventDetails eventDetails = eventDetailsList.get(index);
                    City city = cityBuilder.getCity(event.getCityId());
                    String localTimeZone = city.getLocalTimeZone();
                    com.flickmatch.platform.graphql.type.Event gqlEvent = mapEventToGQLType(eventDetails,
                            event.getDate(), localTimeZone, parsedUniqueEventId.cityId());
                    // log.info("Event found: " + gqlEvent.toString());
                    return gqlEvent;
                } else {
                    log.info("Index out of bounds for event details list. Index: " + parsedUniqueEventId.index()
                            + ", List size: " + eventDetailsList.size());
                    return null;
                }
            } else {
                log.info("No event found for the given ID: " + uniqueEventId);
                return null;
            }
        } catch (Exception e) {
            log.error("Error fetching event by ID: " + uniqueEventId, e);
            return null;
        }
    }

    public List<com.flickmatch.platform.graphql.type.Event> getPastEvents(String cityId, Integer inDays,
            String localTimeZone) {
        List<com.flickmatch.platform.graphql.type.Event> pastEventList = new ArrayList<>();
        Date currentTime = new Date(System.currentTimeMillis());
        // Calculate the date before inDays
        Date dateBeforeInDays = Date.from(currentTime.toInstant().minus(inDays, ChronoUnit.DAYS));
        // log.info(format("Fetching events for cityId %s in the last %d days.", cityId,
        // inDays));
        eventRepository.findAll().forEach(event -> {
            if (event.getCityId().equals(cityId)) {
                List<com.flickmatch.platform.graphql.type.Event> pastEventsInCity = event.getEventDetailsList().stream()
                        .filter(eventDetails -> eventDetails.getStartTime().before(currentTime) &&
                                eventDetails.getStartTime().after(dateBeforeInDays))
                        .map(eventDetails -> mapEventToGQLType(eventDetails, event.getDate(), localTimeZone, cityId))
                        .toList();
                pastEventList.addAll(pastEventsInCity);
            }
        });
        log.info(format("Found a total of %d events", pastEventList.size()));
        return pastEventList;
    }

    /**
     * Gets amount for event.
     *
     * @param uniqueEventId the unique event id
     * @return the amount for event in paise
     */
    public long getAmountForEvent(final String uniqueEventId) {
        Event.EventDetails selectedEvent = getSelectedEvent(uniqueEventId);
        BigDecimal amount = BigDecimal.valueOf(selectedEvent.getCharges());
        amount = amount.multiply(BigDecimal.valueOf(100));
        return amount.longValue();
    }

    public WhatsAppNotification getEventDataForNotification(final String uniqueEventId) {
        Event.EventDetails selectedEvent = getSelectedEvent(uniqueEventId);
        ParsedUniqueEventId parsedUniqueEventId = parseUniqueEventId(uniqueEventId);
        Optional<com.flickmatch.platform.dynamodb.model.City> city = cityRepository
                .findById(parsedUniqueEventId.cityId());
        String localTimeZone = null;
        String currency = getCurrencyForCity(parsedUniqueEventId.cityId());
        if (city.isPresent()) {
            localTimeZone = city.get().getLocalTimeZone();
        }
        List<String> playerNameList = selectedEvent.getPlayerDetailsList().stream()
                .map(playerDetails -> playerDetails.getName())
                .toList();
        return new WhatsAppNotification(selectedEvent.getStartTime(),
                selectedEvent.getEndTime(),
                selectedEvent.getVenueName(),
                selectedEvent.getReservedPlayersCount(),
                selectedEvent.getCharges(),
                selectedEvent.getVenueLocationLink(),
                localTimeZone,
                playerNameList,
                uniqueEventId,
                currency);
    }

    private Event.EventDetails getSelectedEvent(final String uniqueEventId) {
        ParsedUniqueEventId parsedUniqueEventId = parseUniqueEventId(uniqueEventId);
        Optional<Event> eventsInCity = eventRepository
                .findById(new Event.EventId(parsedUniqueEventId.cityId(), parsedUniqueEventId.date()));
        if (eventsInCity.isPresent()) {
            Optional<Event.EventDetails> selectedEvent = eventsInCity.get().getEventDetailsList()
                    .stream().filter(eventDetails -> eventDetails.getIndex().equals(parsedUniqueEventId.index()))
                    .findFirst();
            return selectedEvent.orElseThrow(() -> new IllegalArgumentException("Invalid Event selected"));
        } else {
            throw new IllegalArgumentException("Invalid Event selected");
        }
    }

    private Event addPlayersInEvent(final ParsedUniqueEventId parsedUniqueEventId,
            final List<Event.PlayerDetails> playerDetailsList) {
        Optional<Event> eventsInCity = eventRepository
                .findById(new Event.EventId(parsedUniqueEventId.cityId(), parsedUniqueEventId.date()));
        if (eventsInCity.isPresent()) {
            Optional<Event.EventDetails> selectedEvent = eventsInCity.get().getEventDetailsList()
                    .stream().filter(eventDetails -> eventDetails.getIndex().equals(parsedUniqueEventId.index()))
                    .findFirst();
            if (selectedEvent.isPresent()) {
                selectedEvent.get().getPlayerDetailsList().addAll(playerDetailsList);
                return eventRepository.save(eventsInCity.get());
            } else {
                throw new IllegalArgumentException("Invalid Event selected");
            }
        } else {
            throw new IllegalArgumentException("Invalid Event selected");
        }
    }

    private ParsedUniqueEventId parseUniqueEventId(final String uniqueEventId) {
        int index = 0;
        String date = null;
        String cityId = null;
        if (StringUtils.hasText(uniqueEventId)) {
            String[] parts = uniqueEventId.split("-");
            try {
                cityId = parts[0];
                date = parts[1] + "-" + parts[2] + "-" + parts[3];
                index = Integer.parseInt(parts[4]);
            } catch (NumberFormatException e) {
                log.error(uniqueEventId);
                throw new IllegalArgumentException("Input is invalid");
            }
        } else {
            log.error("Invalid uniqueEventId : " + uniqueEventId);
            throw new IllegalArgumentException("Input is invalid");
        }
        return new ParsedUniqueEventId(cityId, date, index);
    }

    private Event.EventDetails buildEventDetails(CreateEventInput input, int index) throws ParseException {
        // System.out.println(input.getCredits());
        List<SportsVenue> sportsVenueList = sportsVenueBuilder.getSportsVenues(input.getCityId());
        String currency = getCurrencyForCity(input.getCityId());
        Optional<SportsVenue> sportsVenue = sportsVenueList.stream()
                .filter(entity -> entity.getSportsVenueId().equals(input.getSportsVenueId())).findFirst();
        if (sportsVenue.isEmpty()) {
            throw new IllegalArgumentException("Incorrect sports venue");
        }
        Event.EventDetails eventDetails = Event.EventDetails.builder()
                .index(index)
                .currency(currency)
                .startTime(DateUtil.parseDateFromString(input.getStartTime()))
                .endTime(DateUtil.parseDateFromString(input.getEndTime()))
                .charges(input.getCharges())
                .reservedPlayersCount(input.getReservedPlayersCount())
                .waitListPlayersCount(input.getWaitListPlayersCount())
                .sportName("Football")
                .venueName(sportsVenue.get().getDisplayName())
                .venueLocationLink(sportsVenue.get().getGoogleMapsLink())
                .venuePinCode(sportsVenue.get().getPinCode())
                .playerDetailsList(new ArrayList<>())
                .stripePaymentUrl(getPaymentUrlForEvent(sportsVenue.get(), input.getCharges()))
                .credits(input.getCredits())
                .testGame(input.getTestGame())
                .team1Color(input.getTeam1Color())
                .team2Color(input.getTeam2Color())
                .teamDivision(input.getTeamDivision())
                .team1Name(input.getTeam1Name())
                .team2Name(input.getTeam2Name())
                .paymentMethods(input.getPaymentMethods())
                .build();
        return eventDetails;
    }

    private static final Map<String, String> cityToCurrencyMap = new HashMap<>();
    static {
        cityToCurrencyMap.put("1", "INR");
        cityToCurrencyMap.put("2", "INR");
        cityToCurrencyMap.put("3", "USD");
        cityToCurrencyMap.put("4", "USD");
        cityToCurrencyMap.put("5", "USD");
    }

    public String getCurrencyForCity(String cityId) {
        return cityToCurrencyMap.getOrDefault(cityId, "IN");
    }

    private String getPaymentUrlForEvent(SportsVenue sportsVenue, Double amount) {
        Optional<StripePaymentLink> stripePaymentLinkForAmount = sportsVenue.getStripePaymentLinks().stream()
                .filter(stripePaymentLink -> stripePaymentLink.getAmount().equals(amount))
                .findFirst();
        if (stripePaymentLinkForAmount.isEmpty()) {
            // Todo: For now keeping it soft dependency, we need to throw exception in
            // future
            log.error("Can't find stripe payment link in venue");
            return null;
        }
        return stripePaymentLinkForAmount.get().getUrl();
    }

    private com.flickmatch.platform.graphql.type.Event mapEventToGQLType(Event.EventDetails eventDetails, String date,
            String localTimeZone, String cityId) {
        String eventId = date + "-" + eventDetails.getIndex();
        String uniqueEventId = cityId + "-" + date + "-" + eventDetails.getIndex();
        int players = eventDetails.getReservedPlayersCount() / 2;
        String eventType = players + "v" + players;
        // Todo: clean up this field from schema
        String title = "";
        List<Player> reservedPlayers = new ArrayList<>();
        List<Player> waitListPlayers = new ArrayList<>();
        createPlayerQueue(eventDetails, reservedPlayers, waitListPlayers);
        return com.flickmatch.platform.graphql.type.Event.builder()
                .startTime(eventDetails.getStartTime())
                .currency(eventDetails.getCurrency())
                .endTime(eventDetails.getEndTime())
                .eventId(eventId)
                .uniqueEventId(uniqueEventId)
                .displayTitle(title)
                .date(getFormattedEventDate(eventDetails.getStartTime(), localTimeZone))
                .time(getFormattedEventTime(eventDetails.getStartTime(), eventDetails.getEndTime(), localTimeZone))
                .venueName(eventDetails.getVenueName())
                .charges(eventDetails.getCharges())
                .venueLocationLink(eventDetails.getVenueLocationLink())
                .reservedPlayersList(reservedPlayers)
                .reservedPlayersCount(eventDetails.getReservedPlayersCount())
                .waitListPlayers(waitListPlayers)
                .waitListPlayersCount(eventDetails.getWaitListPlayersCount())
                .stripePaymentUrl(eventDetails.getStripePaymentUrl() + CLIENT_REFERENCE_ID + eventId)
                .venuePinCode(eventDetails.getVenuePinCode())
                .credits(eventDetails.getCredits())
                .testGame(eventDetails.getTestGame())
                .team1Color(eventDetails.getTeam1Color())
                .team2Color(eventDetails.getTeam2Color())
                .teamDivision(eventDetails.getTeamDivision())
                .team1Score(eventDetails.getTeam1Score())
                .team2Score(eventDetails.getTeam2Score())
                .team1Name(eventDetails.getTeam1Name())
                .team2Name(eventDetails.getTeam2Name())
                .paymentMethods(eventDetails.getPaymentMethods())
                .build();
    }

    private void createPlayerQueue(Event.EventDetails eventDetails,
            List<Player> reservedPlayers,
            List<Player> waitListPlayers) {
        AtomicInteger counter = new AtomicInteger();
        eventDetails.getPlayerDetailsList().forEach(playerDetails -> {
            Player player = Player.builder()
                    .displayName(playerDetails.getName())
                    .teamColor(playerDetails.getTeamColor())
//                    .matchesPlayed(playerDetails.getPlayerStats().getMatchesPlayed())
//                    .wins(playerDetails.getPlayerStats().getWins())
//                    .gameLinks(playerDetails.getPlayerStats().getGameLinks().toString())
                    .build();
            if (counter.get() < eventDetails.getReservedPlayersCount()) {
                reservedPlayers.add(player);
            } else {
                waitListPlayers.add(player);
            }
            counter.getAndIncrement();
        });
    }

    private String getFormattedEventDate(Date startTime, String localTimeZone) {
        SimpleDateFormat dateFormatter = new SimpleDateFormat("EEE, MMM d");
        dateFormatter.setTimeZone(TimeZone.getTimeZone(localTimeZone));
        return dateFormatter.format(startTime);
    }
    int countPlayersInQueue(String uniqueEventId) {
        com.flickmatch.platform.graphql.type.Event event = getEventById(uniqueEventId);
        return event.getReservedPlayersCount() + event.getWaitListPlayersCount();
    }

    private String getFormattedEventTime(Date startTime, Date endTime, String localTimeZone) {
        SimpleDateFormat timeFormatter = new SimpleDateFormat("h:mma");
        TimeZone timeZone = TimeZone.getTimeZone(localTimeZone);
        timeFormatter.setTimeZone(timeZone);
        return timeFormatter.format(startTime) + "-"
                + timeFormatter.format(endTime) + " " + timeZone.getID();
    }

    private void isStartTimeInPast(Date startTime) {
        Date currentTime = new Date(System.currentTimeMillis());
        if (currentTime.after(startTime)) {
            throw new IllegalArgumentException("Selected past event/Time");
        }
    }

    public Event updateEventScore(UpdateEventScoreInput input) {
        ParsedUniqueEventId parsedUniqueEventId = parseUniqueEventId(input.getUniqueEventId());
        Optional<Event> eventsInCity = eventRepository
                .findById(new Event.EventId(parsedUniqueEventId.cityId(), parsedUniqueEventId.date()));

        if (eventsInCity.isPresent()) {
            Event event = eventsInCity.get();
            Optional<Event.EventDetails> selectedEvent = event.getEventDetailsList()
                    .stream()
                    .filter(eventDetails -> eventDetails.getIndex().equals(parsedUniqueEventId.index()))
                    .findFirst();

            if (selectedEvent.isPresent()) {
                Event.EventDetails eventDetails = selectedEvent.get();
                eventDetails.setTeam1Score(input.getTeam1Score());
                eventDetails.setTeam2Score(input.getTeam2Score());

                // Update player stats
//                String winningTeamColor = null;
//                if (input.getTeam1Score() > input.getTeam2Score()) {
//                    winningTeamColor = eventDetails.getTeam1Color();
//                } else if (input.getTeam2Score() > input.getTeam1Score()) {
//                    winningTeamColor = eventDetails.getTeam2Color();
//                }

//                for (Event.PlayerDetails player : eventDetails.getPlayerDetailsList()) {
//                    if (player.getPlayerStats() == null) {
//                        player.setPlayerStats(Event.PlayerStats.builder()
//                                .matchesPlayed(0)
//                                .wins(0)
//                                .gameLinks(new ArrayList<>())
//                                .build());
//                    }
//                    if (!player.getPlayerStats().getGameLinks().contains(input.getUniqueEventId())) {
//                        player.getPlayerStats().getGameLinks().add(input.getUniqueEventId());
//                        Integer totalMatches = player.getPlayerStats().getMatchesPlayed();
//                        player.getPlayerStats().setMatchesPlayed(totalMatches != null ? totalMatches + 1 : 1);
//
//                        Integer wins = player.getPlayerStats().getWins();
//                        if (winningTeamColor != null && winningTeamColor.equals(player.getTeamColor())) {
//                            player.getPlayerStats().setWins(wins != null ? wins + 1 : 1);
//                        }

//                        if (player.getPlayerStats().getGameLinks() == null) {
//                            player.getPlayerStats().setGameLinks(new ArrayList<>());
//                        }
//                        if (!player.getPlayerStats().getGameLinks().contains(input.getUniqueEventId())) {
//                            player.getPlayerStats().getGameLinks().add(input.getUniqueEventId());
//                        }
//                    }
//                    else{
//                        log.info("Score already updated");
//                    }
//
//                }

                return eventRepository.save(event);
            }
        }
        throw new IllegalArgumentException("Event not found");
    }

    public Event updateEventDetails(UpdateEventDetailsInput input) {
        ParsedUniqueEventId parsedUniqueEventId = parseUniqueEventId(input.getUniqueEventId());
        Optional<Event> eventsInCity = eventRepository
                .findById(new Event.EventId(parsedUniqueEventId.cityId(), parsedUniqueEventId.date()));

        if (eventsInCity.isPresent()) {
            Event event = eventsInCity.get();
            Optional<Event.EventDetails> selectedEvent = event.getEventDetailsList()
                    .stream()
                    .filter(eventDetails -> eventDetails.getIndex().equals(parsedUniqueEventId.index()))
                    .findFirst();

            if (selectedEvent.isPresent()) {
                Event.EventDetails eventDetails = selectedEvent.get();
                input.getStartTime().ifPresent(eventDetails::setStartTime);
                input.getEndTime().ifPresent(eventDetails::setEndTime);
                input.getCharges().ifPresent(eventDetails::setCharges);
                input.getReservedPlayersCount().ifPresent(eventDetails::setReservedPlayersCount);
                input.getWaitListPlayersCount().ifPresent(eventDetails::setWaitListPlayersCount);
                input.getIsDeleted().ifPresent(eventDetails::setIsDeleted);
                input.getSportsVenueId().ifPresent(eventDetails::setVenueName);
                input.getCredits().ifPresent(eventDetails::setCredits);
                input.getTestGame().ifPresent(eventDetails::setTestGame);
                input.getTeamDivision().ifPresent(eventDetails::setTeamDivision);
                input.getTeam1Color().ifPresent(eventDetails::setTeam1Color);
                input.getTeam2Color().ifPresent(eventDetails::setTeam2Color);

                return eventRepository.save(event);
            }
        }
        throw new IllegalArgumentException("Event not found");
    }

//    public Integer countMatchesPlayed(String uniqueId) {
//        Event.PlayerDetails playerDetails = eventRepository.findById()
//    }
}
