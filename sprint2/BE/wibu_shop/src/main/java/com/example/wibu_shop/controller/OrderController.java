package com.example.wibu_shop.controller;

import com.example.wibu_shop.config.JwtUserDetails;
import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.OrderDetail;
import com.example.wibu_shop.model.Orders;
import com.example.wibu_shop.model.ShoppingCart;
import com.example.wibu_shop.service.ICustomerService;
import com.example.wibu_shop.service.IOderDetailService;
import com.example.wibu_shop.service.IOrderService;
import com.example.wibu_shop.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/order")
@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true", maxAge = 3600)
public class OrderController {
    @Autowired
    private IShoppingCartService shoppingCartService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IOderDetailService oderDetailService;
    @Autowired
    private IOrderService orderService;

    @PostMapping("")
    public ResponseEntity<?> createOrder() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
        Customers customers = customerService.getCustomer(principal.getUsername());
        List<ShoppingCart> shoppingCartList = shoppingCartService.findAllByCustomer(customers.getId());
        try {
            ResponseEntity<?> res = oderDetailService.createOrder(shoppingCartList, customers);
            if (res.getStatusCode() == HttpStatus.OK) {
                shoppingCartService.deleteByCustomer(customers);
            }
            return res;
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("")
    public ResponseEntity<List<Orders>> getHistory() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            Customers customers = customerService.getCustomer(principal.getUsername());
            List<Orders> ordersList = orderService.getHistory(customers.getId());
            return new ResponseEntity<>(ordersList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/detail")
    public ResponseEntity<List<OrderDetail>> getHistoryDetail(@RequestParam("id") Long id) {
        try {
            List<OrderDetail> orderDetailList = oderDetailService.getHistoryDetail(id);
            if (orderDetailList.size() == 0) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(orderDetailList,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
