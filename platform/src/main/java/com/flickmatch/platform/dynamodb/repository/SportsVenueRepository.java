package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.SportsVenues;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

@EnableScan
public interface SportsVenueRepository extends CrudRepository<SportsVenues, String> {
    List<SportsVenues> findByAmount(Double amount);

}
