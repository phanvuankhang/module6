package com.example.wibu_shop.service.impl;

import com.example.wibu_shop.model.Orders;
import com.example.wibu_shop.repository.IOrderRepository;
import com.example.wibu_shop.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderServiceImpl implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;

    @Override
    public List<Orders> getHistory(Long id) {
        return orderRepository.findAllByCustomers_IdOrderByCreateDateDesc(id);
    }
}
