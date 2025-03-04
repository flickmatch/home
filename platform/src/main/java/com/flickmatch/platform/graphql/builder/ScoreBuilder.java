package com.flickmatch.platform.graphql.builder;

import com.flickmatch.platform.dynamodb.model.Score;
import com.flickmatch.platform.dynamodb.repository.ScoreRepository;
import com.flickmatch.platform.graphql.input.CreateScoreInput;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class ScoreBuilder {
    @Autowired
    private ScoreRepository scoreRepository;


    public Score createScore(CreateScoreInput input) {
        Score score = new Score();
        score.setTeamA(input.getTeamA());
        score.setTeamB(input.getTeamB());
        return scoreRepository.save(score);
    }

    public List<Score> getScore() {
         return (List<Score>) scoreRepository.findAll();
    }
}
