package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.graphql.builder.CityBuilder;
import com.flickmatch.platform.graphql.type.City;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@Log4j2
public class CityController {

    @Autowired
    private CityBuilder cityBuilder;

    @QueryMapping(name = "cities")
    public List<City> getCities() {
        return cityBuilder.getCities();
    }

    @QueryMapping(name = "city")
    public City getCity(@Argument String cityId) {
        return cityBuilder.getCity(cityId);
    }

}
