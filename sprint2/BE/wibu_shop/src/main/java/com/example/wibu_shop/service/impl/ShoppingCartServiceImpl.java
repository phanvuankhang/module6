package com.example.wibu_shop.service.impl;

import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.Products;
import com.example.wibu_shop.model.ShoppingCart;
import com.example.wibu_shop.repository.IShoppingCartRepository;
import com.example.wibu_shop.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingCartServiceImpl implements IShoppingCartService {
    @Autowired
    private IShoppingCartRepository shoppingCartRepository;


    @Override
    public List<ShoppingCart> findAllByCustomer(Long id) {
        return shoppingCartRepository.findAllByCustomers_Id(id);
    }

    @Override
    public void createCart(Products products, Customers customers, Integer quantity) {
        ShoppingCart shoppingCart = shoppingCartRepository.getCartToCreate(products.getId(), customers.getId());
        if (shoppingCart == null) {
            ShoppingCart shoppingCartNew = new ShoppingCart();
            shoppingCartNew.setPrice(products.getPrice() * quantity);
            shoppingCartNew.setQuantity(quantity);
            shoppingCartNew.setCustomers(customers);
            shoppingCartNew.setProducts(products);
            shoppingCartRepository.save(shoppingCartNew);
        } else {
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice() * (shoppingCart.getQuantity() + quantity));
            shoppingCart.setQuantity(shoppingCart.getQuantity() + quantity);
            shoppingCartRepository.save(shoppingCart);
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
    public void setCart(Integer index, Long id) {
        ShoppingCart shoppingCart = shoppingCartRepository.findById(id).get();
        if (index == 0) {
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice() * (shoppingCart.getQuantity() - 1));
            shoppingCart.setQuantity(shoppingCart.getQuantity() - 1);
            shoppingCartRepository.save(shoppingCart);
        } else {
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice() * (shoppingCart.getQuantity() + 1));
            shoppingCart.setQuantity(shoppingCart.getQuantity() + 1);
            shoppingCartRepository.save(shoppingCart);
        }
    }

}
