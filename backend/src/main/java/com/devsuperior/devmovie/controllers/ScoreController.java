package com.devsuperior.devmovie.controllers;


import com.devsuperior.devmovie.dtos.MovieDTO;
import com.devsuperior.devmovie.dtos.ScoreDTO;
import com.devsuperior.devmovie.services.MovieService;
import com.devsuperior.devmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;


    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO dto){
        MovieDTO movieDTO = scoreService.saveScore(dto);
        return movieDTO;
    }

}
