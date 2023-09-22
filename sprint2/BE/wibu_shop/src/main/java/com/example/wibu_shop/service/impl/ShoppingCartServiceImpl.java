package com.example.wibu_shop.service.impl;

import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.Products;
import com.example.wibu_shop.model.ShoppingCart;
import com.example.wibu_shop.repository.IShoppingCartRepository;
import com.example.wibu_shop.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingCartServiceImpl implements IShoppingCartService {
    @Autowired
    private IShoppingCartRepository shoppingCartRepository;


    @Override
    public List<ShoppingCart> findAllByCustomer(Long id) {
        List<ShoppingCart> shoppingCartList = shoppingCartRepository.findAllByCustomers_Id(id);
        for (ShoppingCart s : shoppingCartList) {
            if (s.getQuantity() >= s.getProducts().getQuantity() && s.getProducts().getQuantity() > 0) {
                s.setQuantity(s.getProducts().getQuantity());
            } else if (s.getProducts().getQuantity() == 0) {
                shoppingCartRepository.deleteById(s.getId());
            }
        }
        return shoppingCartRepository.findAllByCustomers_Id(id);
    }

    @Override
    public ResponseEntity<?> createCart(Products products, Customers customers, Integer quantity) {
        ShoppingCart shoppingCart = shoppingCartRepository.getCartToCreate(products.getId(), customers.getId());
        if (shoppingCart == null) {
            ShoppingCart shoppingCartNew = new ShoppingCart();
            shoppingCartNew.setPrice(products.getPrice() * quantity);
            shoppingCartNew.setQuantity(quantity);
            shoppingCartNew.setCustomers(customers);
            shoppingCartNew.setProducts(products);
            return new ResponseEntity<>(shoppingCartRepository.save(shoppingCartNew), HttpStatus.OK);
        }
        if (shoppingCart.getQuantity() >= shoppingCart.getProducts().getQuantity()) {
            return new ResponseEntity<>("Số lượng sản phẩm trong giỏ hàng vượt quá số lượng trong kho.!!", HttpStatus.BAD_REQUEST);
        } else {
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice() * (shoppingCart.getQuantity() + quantity));
            shoppingCart.setQuantity(shoppingCart.getQuantity() + quantity);
            return new ResponseEntity<>(shoppingCartRepository.save(shoppingCart), HttpStatus.OK);
        }


    }

    @Override
    public void deleteCart(Long id) {
        shoppingCartRepository.deleteById(id);
    }

    @Override
    public void deleteByCustomer(Customers customers) {
        shoppingCartRepository.deleteByCustomer(customers.getId());
    }

    @Override
    public ResponseEntity<?> setCart(Integer index, Long id) {
        ShoppingCart shoppingCart = shoppingCartRepository.findById(id).get();
        if (index == 0) {
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice() * (shoppingCart.getQuantity() - 1));
            shoppingCart.setQuantity(shoppingCart.getQuantity() - 1);
            shoppingCartRepository.save(shoppingCart);
        }
        if (index != 0) {
            if (shoppingCart.getQuantity() >= shoppingCart.getProducts().getQuantity()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Số lượng sản phẩm trong giỏ hàng vượt quá số lượng trong kho.!!");

            } else {
                shoppingCart.setPrice(shoppingCart.getProducts().getPrice() * (shoppingCart.getQuantity() + 1));
                shoppingCart.setQuantity(shoppingCart.getQuantity() + 1);
                shoppingCartRepository.save(shoppingCart);
            }
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
