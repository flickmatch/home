package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Pass;
import com.flickmatch.platform.dynamodb.repository.PassRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

public class PassBuilderTest {
    @Mock
    private PassRepository passRepository;

    @InjectMocks
    private PassBuilder passBuilder;

    private Pass ddbPass1;
    private Pass ddbPass2;
    private Pass ddbPass3;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);

        // Sample DynamoDB Pass objects
        ddbPass1 = new Pass();
        ddbPass1.setPassId("1");
        ddbPass1.setCityId("1");
        ddbPass1.setPassType("LimitedGames");
        ddbPass1.setTotalGames(10);
        ddbPass1.setTotalDays(3000);
        ddbPass1.setPrice(1000.0);
        ddbPass1.setTitle("10 games pass");
        ddbPass1.setStatus("Active");

        ddbPass2 = new Pass();
        ddbPass2.setPassId("2");
        ddbPass2.setCityId("2");
        ddbPass2.setPassType("LimitedDays");
        ddbPass2.setTotalGames(1000);
        ddbPass2.setTotalDays(30);
        ddbPass2.setPrice(1000.0);
        ddbPass2.setTitle("30 days pass");
        ddbPass2.setStatus("Active");

        ddbPass2 = new Pass();
        ddbPass2.setPassId("2");
        ddbPass2.setCityId("2");
        ddbPass2.setPassType("LimitedDays");
        ddbPass2.setTotalGames(10000);
        ddbPass2.setTotalDays(30);
        ddbPass2.setPrice(100.0);
        ddbPass2.setTitle("30 days pass");
        ddbPass2.setStatus("Inactive");
    }

    @Test
    public void testGetAllActivePasses() {
        // Mock data
        when(passRepository.findByStatus("Active")).thenReturn(List.of(ddbPass1, ddbPass2));

        // Call the method under test
        List<com.flickmatch.platform.graphql.type.Pass> result = passBuilder.getAllActivePasses();

        // Verify results
        assertThat(result, notNullValue());
        assertThat(result, hasSize(2));
        verify(passRepository, times(1)).findByStatus("Active");
    }

    @Test
    public void testGetAllActivePassesForCity() {
        // Mock data
        String cityId = "1";
        when(passRepository.findByCityIdAndStatus(cityId, "Active")).thenReturn(List.of(ddbPass1));

        // Call the method under test
        List<com.flickmatch.platform.graphql.type.Pass> result = passBuilder.getAllActivePassesForCity(cityId);

        // Verify results
        assertThat(result, notNullValue());
        assertThat(result, hasSize(1));
        verify(passRepository, times(1)).findByCityIdAndStatus(cityId, "Active");
    }


}
