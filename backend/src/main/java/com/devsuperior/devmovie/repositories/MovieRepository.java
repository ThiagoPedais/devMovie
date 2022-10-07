package com.devsuperior.devmovie.repositories;

import com.devsuperior.devmovie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
