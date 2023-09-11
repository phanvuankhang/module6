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
    public ResponseEntity<Page<Products>> getAllProduct(@RequestParam(value = "name", defaultValue = "null") String name,
                                                           @RequestParam(value = "page", defaultValue = "0") Integer page) {
        Sort sort = Sort.by(Sort.Direction.DESC, "create_date");
        Pageable pageable = PageRequest.of(page, 8, sort);
        try {
            return new ResponseEntity<>(productService.getAll(pageable, name), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
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
