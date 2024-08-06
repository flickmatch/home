package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Event;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

@EnableScan
public interface EventRepository extends CrudRepository<Event, Event.EventId> {

    List<Event> findByEventIdCityIdAndEventIdDateBetween(String cityId, String startDate, String endDate);

}