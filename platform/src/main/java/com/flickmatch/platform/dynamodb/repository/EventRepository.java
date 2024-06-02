package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Event;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.socialsignin.spring.data.dynamodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

@EnableScan
public interface EventRepository extends CrudRepository<Event, Event.EventId> {
    @Query("SELECT e FROM Event e WHERE e.cityId = :cityId AND e.date BETWEEN :startDate AND :endDate")
    List<Event> findByCityIdAndDateRange(@Param("cityId") String cityId,
                                         @Param("startDate") String startDate,
                                         @Param("endDate") String endDate);
}
