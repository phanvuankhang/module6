package com.example.wibu_shop.repository;

import com.example.wibu_shop.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<Customers,Long> {
    Customers findByUsers_Username(String username);
}
