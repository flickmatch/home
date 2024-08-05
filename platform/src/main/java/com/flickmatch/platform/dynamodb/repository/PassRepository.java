package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Pass;
import com.flickmatch.platform.dynamodb.model.PassKey;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

@EnableScan
public interface PassRepository extends CrudRepository<Pass,PassKey> {
   List<Pass> findByStatus(String status);

   Optional<Pass> findByPassId(String passId);

}
