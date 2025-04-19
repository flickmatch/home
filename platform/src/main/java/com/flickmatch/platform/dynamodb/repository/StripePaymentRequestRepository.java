package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.RazorPaymentRequest;
import com.flickmatch.platform.dynamodb.model.StripePaymentRequest;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

@EnableScan
public interface StripePaymentRequestRepository extends CrudRepository<StripePaymentRequest,String> {
    Optional<StripePaymentRequest> findById(String sessionId);
}
