package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.repository.CityRepository;
import com.flickmatch.platform.graphql.type.City;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class CityBuilder {

    private final CityRepository cityRepository;

    public CityBuilder(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public List<City> getCities() {
        return cityRepository.findAll().stream().map(city -> City.builder()
                .cityId(city.getCityId())
                .cityName(city.getCityName())
                .localTimeZone(city.getLocalTimeZone())
                .currency(city.getCurrency())
                .iconUrl(city.getIconUrl())
                .countryCode(city.getCountryCode())
                .build()).toList();
    }

    public City getCity(final String cityId) {
        Optional<com.flickmatch.platform.dynamodb.model.City> city = cityRepository.findById(cityId);
        if (city.isPresent()) {
            return City.builder()
                    .cityId(city.get().getCityId())
                    .cityName(city.get().getCityName())
                    .localTimeZone(city.get().getLocalTimeZone())
                    .currency(city.get().getCurrency())
                    .iconUrl(city.get().getIconUrl())
                    .countryCode(city.get().getCountryCode())
                    .build();
        }
        return null;
    }
}