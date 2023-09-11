package com.example.wibu_shop.service;

import com.example.wibu_shop.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Products> getAll(Pageable pageable, String name);

    Products getProduct(Long id);
}
