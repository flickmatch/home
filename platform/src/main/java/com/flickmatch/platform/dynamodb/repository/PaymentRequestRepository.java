package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.PaymentRequest;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface PaymentRequestRepository extends CrudRepository<PaymentRequest, String> {

}
