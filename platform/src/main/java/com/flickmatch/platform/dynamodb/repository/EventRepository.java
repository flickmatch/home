package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Event;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface EventRepository extends CrudRepository<Event, Event.EventId> {
}
