package com.example.mine.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mine.entity.Auth;
import com.example.mine.entity.User;

@Repository
public interface AuthRepository extends JpaRepository<Auth, Long> {
    boolean existsByUser(User user);
    Optional<Auth> findByUser(User user);
    Optional<Auth> findByRefreshToken(String refreshToken);
}