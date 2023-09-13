package com.example.wibu_shop.repository;

import com.example.wibu_shop.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Long> {
    List<OrderDetail> findAllByOrders_Id(Long id);
}
