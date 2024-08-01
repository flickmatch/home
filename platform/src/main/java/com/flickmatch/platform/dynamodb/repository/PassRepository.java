package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Pass;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

@EnableScan
public interface PassRepository extends CrudRepository<Pass,String> {
    List<Pass> findByStatus(String status);
}
