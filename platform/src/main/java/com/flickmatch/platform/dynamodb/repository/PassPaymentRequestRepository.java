package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.PassPaymentRequest;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

@EnableScan
public interface PassPaymentRequestRepository extends CrudRepository<PassPaymentRequest,String> {
    Optional<PassPaymentRequest> findById(String orderId);
}
