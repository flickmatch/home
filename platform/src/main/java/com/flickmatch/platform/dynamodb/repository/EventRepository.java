package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Event;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@EnableScan
public interface EventRepository extends CrudRepository<Event, Event.EventId> {

    List<Event> findByEventIdCityIdAndEventIdDateBetween(String cityId, String startDate, String endDate);
}
