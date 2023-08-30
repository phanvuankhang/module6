package com.example.wibu_shop.service;

import com.example.wibu_shop.dto.IProductDTO;
import com.example.wibu_shop.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<IProductDTO> getAll(Pageable pageable, String name);
}
