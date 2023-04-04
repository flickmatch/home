package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Sport;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface SportRepository extends CrudRepository<Sport, String> {

    Optional<Sport> findById(String sportId);

}
