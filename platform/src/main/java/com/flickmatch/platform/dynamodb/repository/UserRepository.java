package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,String> {
}
