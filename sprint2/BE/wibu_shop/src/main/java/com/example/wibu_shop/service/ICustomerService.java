package com.example.wibu_shop.service;

import com.example.wibu_shop.dto.CustomersDTO;
import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.Products;

public interface ICustomerService {
    Customers getCustomer(String customer);
    void createCustomer(CustomersDTO customersDTO);

}
