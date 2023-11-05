package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.SportsVenues;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;


@EnableScan
public interface SportsVenueRepository extends CrudRepository<SportsVenues, String> {
    SportsVenues findByCityIdAndSportsVenueId(String cityId, String sportsVenueId);
}
