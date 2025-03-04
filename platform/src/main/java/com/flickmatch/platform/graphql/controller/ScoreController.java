package com.flickmatch.platform.graphql.controller;

import com.flickmatch.platform.dynamodb.model.Score;
import com.flickmatch.platform.graphql.builder.ScoreBuilder;
import com.flickmatch.platform.graphql.input.CreateScoreInput;
import com.flickmatch.platform.graphql.type.MutationResult;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@Log4j2
public class ScoreController {

    @Autowired
    private ScoreBuilder scoreBuilder;

    @MutationMapping
    public MutationResult createScore(@Argument CreateScoreInput input){
        try {
            scoreBuilder.createScore(input);
        }catch (Exception e){
            log.error(e.getMessage());
            return MutationResult.builder()
                    .isSuccessful(false)
                    .errorMessage(e.getMessage())
                    .build();
        }
        return MutationResult.builder()
                .isSuccessful(true)
                .build();
    }
    @QueryMapping(name = "scores")
    private List<Score> getScores(){
        return scoreBuilder.getScore();
    }
}
