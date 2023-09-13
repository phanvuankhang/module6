package com.example.wibu_shop.service;


import com.example.wibu_shop.model.Orders;

import java.util.List;

public interface IOrderService {

    List<Orders> getHistory(Long id);

}
