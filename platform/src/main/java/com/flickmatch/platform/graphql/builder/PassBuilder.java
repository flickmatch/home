package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Pass;
import com.flickmatch.platform.dynamodb.repository.PassRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class PassBuilder {
    @Autowired
    private PassRepository passRepository;
    public List<Pass> getPasses() {
        try{
            return passRepository.findByStatus("Active");
        }
        catch(Exception e) {
            log.error("Error while fetching passes", e);
            return null;
        }
    }
}
