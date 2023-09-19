package com.example.wibu_shop.service.impl;

import com.example.wibu_shop.model.Products;
import com.example.wibu_shop.repository.IProductRepository;
import com.example.wibu_shop.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Page<Products>   getAll(Pageable pageable, String name,String productType) {
        if (productType.equals("null")){
            return productRepository.getAll(pageable,name,"");

        }else {
            return productRepository.getAll(pageable,name,productType);
        }

    }

    @Override
    public Products getProduct(Long id) {
        return productRepository.findById(id).get();
    }
}
