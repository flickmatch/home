package com.flickmatch.platform.graphql.mapper;


import com.flickmatch.platform.dynamodb.model.SportsVenues;
import com.flickmatch.platform.graphql.type.StripePaymentLink;
import org.springframework.util.CollectionUtils;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public final class StripePaymentLinkMapper {

    public static List<StripePaymentLink> toStripePaymentLinkType(
            List<SportsVenues.StripePaymentLink> stripePaymentLinks) {
        if (CollectionUtils.isEmpty(stripePaymentLinks)) {
            return Collections.emptyList();
        }
        return stripePaymentLinks.stream()
                .map(stripePaymentLink -> StripePaymentLink.builder()
                        .amount(stripePaymentLink.getAmount())
                        .url(stripePaymentLink.getUrl())
                        .build())
                .collect(Collectors.toList());
    }
}
