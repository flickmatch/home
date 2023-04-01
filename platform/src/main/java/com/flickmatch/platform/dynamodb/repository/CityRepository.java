package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.City;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@EnableScan
public interface CityRepository extends CrudRepository<City, String> {

    Optional<City> findById(String cityId);

    List<City> findAll();
}
