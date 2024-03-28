package com.flickmatch.platform.dynamodb.repository;

import com.flickmatch.platform.dynamodb.model.User;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

@EnableScan
public interface UserRepository extends CrudRepository<User,String> {
    List<User> findAll();

    Optional<User> findByEmail(String email);


}
