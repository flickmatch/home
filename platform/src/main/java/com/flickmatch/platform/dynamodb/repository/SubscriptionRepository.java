package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.Subscription;
import com.flickmatch.platform.dynamodb.model.SubscriptionKey;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface SubscriptionRepository extends CrudRepository<Subscription,SubscriptionKey> {


}
