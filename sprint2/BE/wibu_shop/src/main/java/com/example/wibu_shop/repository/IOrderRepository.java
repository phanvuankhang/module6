package com.example.wibu_shop.repository;

import com.example.wibu_shop.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IOrderRepository extends JpaRepository<Orders, Long> {
    List<Orders> findAllByCustomers_IdOrderByCreateDateDesc(Long id);
}
