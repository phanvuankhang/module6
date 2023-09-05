package com.example.wibu_shop.repository;

import com.example.wibu_shop.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<Users,Long> {
    Users findByUsername(String username);
}
