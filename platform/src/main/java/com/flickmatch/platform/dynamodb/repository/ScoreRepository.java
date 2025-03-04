package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Score;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface ScoreRepository extends CrudRepository<Score, String> {

}
