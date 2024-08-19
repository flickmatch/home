package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Pass;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

@EnableScan
public interface PassRepository extends CrudRepository<Pass,Pass.PassKey> {
    List<Pass> findByStatus(String status);

    // Find all active passes for a given cityId
    List<Pass> findByCityIdAndStatus(String cityId, String status);

    List<Pass> findAll();

    Optional<Pass> findByPassId(String passId);
}
