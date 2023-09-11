package com.example.wibu_shop.service;

import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.Products;
import com.example.wibu_shop.model.ShoppingCart;

import java.util.List;

public interface IShoppingCartService {
    List<ShoppingCart> findAllByCustomer(Long id);

    void createCart(Products products, Customers customers, Integer quantity);
}
