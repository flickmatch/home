package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Subscription;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

@EnableScan
public interface SubscriptionRepository extends CrudRepository<Subscription, Subscription.SubscriptionKey> {
    Optional<Subscription> findBySubscriptionId(String subscriptionId);

}
