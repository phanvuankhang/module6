package com.example.wibu_shop.controller;

import com.example.wibu_shop.config.JwtUserDetails;
import com.example.wibu_shop.dto.CustomersDTO;
import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("/api/customer")
@RestController
@CrossOrigin("*")
public class CustomersController {
    @Autowired
    private ICustomerService customerService;

    @PostMapping("/new-customer")
    public ResponseEntity<CustomersDTO> createCustomer(@Valid @RequestBody CustomersDTO customersDTO) {
        try {
            customerService.createCustomer(customersDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")
    @GetMapping("/info")
    public ResponseEntity<Customers> getCustomer() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            Customers customers = customerService.getCustomer(principal.getUsername());
            return new ResponseEntity<>(customers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
