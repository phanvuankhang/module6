package com.example.wibu_shop.service;

import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.OrderDetail;
import com.example.wibu_shop.model.ShoppingCart;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IOderDetailService {
    ResponseEntity<?> createOrder(List<ShoppingCart> shoppingCarts, Customers customers);

    List<OrderDetail> getHistoryDetail(Long id);

}
