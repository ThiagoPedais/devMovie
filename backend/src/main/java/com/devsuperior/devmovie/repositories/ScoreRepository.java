package com.devsuperior.devmovie.repositories;

import com.devsuperior.devmovie.entities.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, Long> {
}
