package com.flickmatch.platform.dynamodb.repository;
import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;

import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

@EnableScan
public interface RazorPaymentRequestRepository extends CrudRepository<RazorPaymentRequest, String> {
    Optional<RazorPaymentRequest> findById(String orderId);
}
