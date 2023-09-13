package com.example.wibu_shop.service.impl;

import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.OrderDetail;
import com.example.wibu_shop.model.Orders;
import com.example.wibu_shop.model.ShoppingCart;
import com.example.wibu_shop.repository.IOrderDetailRepository;
import com.example.wibu_shop.repository.IOrderRepository;
import com.example.wibu_shop.service.IOderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Random;

@Service
public class OderDetailServiceImpl implements IOderDetailService {
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Override
    public ResponseEntity<?> createOrder(List<ShoppingCart> shoppingCarts, Customers customers) {
        boolean check = false;
        for (int i = 0; i < shoppingCarts.size(); i++) {
            if (shoppingCarts.get(i).getQuantity() > shoppingCarts.get(i).getProducts().getQuantity()) {
                check = true;
            }
        }
        if (check == true) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Số lượng sản phẩm không đủ! Vui lòng giảm số lượng mua tương ứng!!");
        } else {
            Orders orders = new Orders();
            orders.setCustomers(customers);
            orders.setTotalPrice(0.0);
            orderRepository.save(orders);
            Double price = 0.0;
            for (int i = 0; i < shoppingCarts.size(); i++) {
                OrderDetail orderDetail = new OrderDetail();
                orderDetail.setOrders(orders);
                orderDetail.setProducts(shoppingCarts.get(i).getProducts());
                orderDetail.setQuantity(shoppingCarts.get(i).getQuantity());
                orderDetail.setPrice(shoppingCarts.get(i).getPrice());
                orderDetail.getProducts().setQuantity(orderDetail.getProducts().getQuantity() - orderDetail.getQuantity());
                orderDetailRepository.save(orderDetail);
                price += shoppingCarts.get(i).getPrice();
            }
            List<Orders> list = orderRepository.findAll();
            long code;
            Random random = new Random();
            long min = 10000; // Số nhỏ nhất có 5 chữ số
            long max = 99999; // Số lớn nhất có 5 chữ số
            boolean flag;
            String orderCode;
            do {
                flag = true;
                code = random.nextLong() % (max - min + 1) + min;
                orderCode = "OD-" + code;
                for (int i = 0; i < list.size(); i++) {
                    if (Objects.equals(list.get(i).getCode(), orderCode)) {
                        flag = false;
                    }
                }
            } while (!flag);
            orders.setCode(orderCode);
            orders.setTotalPrice(price);
            orderRepository.save(orders);
            return new ResponseEntity<>(HttpStatus.OK);
        }

    }

    @Override
    public List<OrderDetail> getHistoryDetail(Long id) {
        return orderDetailRepository.findAllByOrders_Id(id);
    }

}
