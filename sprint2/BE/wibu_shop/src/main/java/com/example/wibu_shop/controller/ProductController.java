package com.example.wibu_shop.controller;

import com.example.wibu_shop.model.Products;
import com.example.wibu_shop.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("")
    public ResponseEntity<Page<Products>> getAllProduct(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                                        @RequestParam(value = "name", defaultValue = "") String name,
                                                        @RequestParam(value = "productType", defaultValue = "") String productType,
                                                        @RequestParam(value = "orderBy", defaultValue = "0") String orderBy) {
        Sort sort = checkOrderBy(orderBy);
        Pageable pageable = PageRequest.of(page, 8, sort);
        try {
            return new ResponseEntity<>(productService.getAll(pageable, name, productType), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public Sort checkOrderBy(String orderBy) {
        Sort sort;
        switch (orderBy) {
            case "new":
                sort = Sort.by("id").descending();
                break;
            case "a-z":
                sort = Sort.by("name").ascending();
                break;
            case "priceAscending":
                sort = Sort.by("price").ascending();
                break;
            case "priceDescending":
                sort = Sort.by("price").descending();
                break;
            default:
                sort = Sort.by("id").descending();
                break;
        }
        return sort;
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Products> getProductDetail(@PathVariable("id") Long id) {
        try {
            return new ResponseEntity<>(productService.getProduct(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
