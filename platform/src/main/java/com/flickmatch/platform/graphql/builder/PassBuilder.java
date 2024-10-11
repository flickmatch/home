package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.graphql.type.Pass;
import com.flickmatch.platform.dynamodb.repository.PassRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
public class PassBuilder {
    private PassRepository passRepository;

    public PassBuilder(PassRepository passRepository) {
        this.passRepository = passRepository;
    }

    public List<Pass> getAllActivePasses() {
        try {
            return passRepository.findByStatus("Active")
                    .stream()
                    .map(this::mapEventToGQLType)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            log.error("Error while fetching passes", e);
            return List.of();
        }
    }

    // to be used later with GQL query
    public List<Pass> getAllActivePassesForCity(String cityId) {
        return
                passRepository.findByCityIdAndStatus(cityId, "Active")
                        .stream()
                        .map(this::mapEventToGQLType)
                        .collect(Collectors.toList());
    }

    Pass mapEventToGQLType(com.flickmatch.platform.dynamodb.model.Pass ddbPass) {
//        System.out.println(ddbPass.toString());
//        System.out.println(ddbPass.getPayForGames());

        return Pass.builder()
                .passId(ddbPass.getPassId())
                .status(ddbPass.getStatus())
                .cityId(ddbPass.getCityId())
                .passType(ddbPass.getPassType())
                .totalGames(ddbPass.getTotalGames())
                .totalDays(ddbPass.getTotalDays())
                .title(ddbPass.getTitle())
                .price(ddbPass.getPrice())
                .description(ddbPass.getDescription())
                .features(ddbPass.getFeatures())
//                .payForGames(ddbPass.getPayForGames())
                .build();
    }

    public double getAmountForPass(final String passId) {
        Optional<com.flickmatch.platform.dynamodb.model.Pass> pass = passRepository.findByPassId(passId);
        Double amount = pass.get().getPrice();
        return amount;
    }
}
