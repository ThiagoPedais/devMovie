package com.devsuperior.devmovie.repositories;

import com.devsuperior.devmovie.entities.Movie;
import com.devsuperior.devmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
