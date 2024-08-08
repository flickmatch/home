package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.type.Pass;
import com.flickmatch.platform.graphql.builder.PassBuilder;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@Log4j2
public class PassController {
    @Autowired
    PassBuilder passBuilder;
   
    @QueryMapping(name = "passes")
    public List<Pass> getAllActivePasses() {
       return passBuilder.getAllActivePasses();
   }

    @QueryMapping(name = "passesForCity")
    public List<Pass> getAllActivePassesForCity(@Argument String cityId) {
        return passBuilder.getAllActivePassesForCity(cityId);
    }
}
