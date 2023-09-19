package com.example.wibu_shop.service;

import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.Products;
import com.example.wibu_shop.model.ShoppingCart;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IShoppingCartService {
    List<ShoppingCart> findAllByCustomer(Long id);

    ResponseEntity<?> createCart(Products products, Customers customers, Integer quantity);

    void deleteCart(Long id);

    void deleteByCustomer(Customers customers);
    ResponseEntity<?> setCart(Integer index, Long id);
}
