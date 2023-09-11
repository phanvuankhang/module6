package com.example.wibu_shop.controller;

import com.example.wibu_shop.config.JwtUserDetails;
import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.Products;
import com.example.wibu_shop.model.ShoppingCart;
import com.example.wibu_shop.service.ICustomerService;
import com.example.wibu_shop.service.IProductService;
import com.example.wibu_shop.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RequestMapping("/api/shopping")
@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true", maxAge = 3600)
public class ShoppingCartController {
    @Autowired
    private IShoppingCartService shoppingCartService;

    @Autowired
    private ICustomerService customerService;

    @Autowired
    private IProductService productService;

    @GetMapping("")
    ResponseEntity<List<ShoppingCart>> geAlltCart(HttpServletRequest httpServletRequest) {
        HttpSession httpSession = httpServletRequest.getSession();
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication.getPrincipal().equals("anonymousUser")) {
                List<ShoppingCart> list = (List<ShoppingCart>) httpSession.getAttribute("cart");
                return new ResponseEntity<>(list, HttpStatus.OK);
            }
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            Customers customers = customerService.getCustomer(principal.getUsername());
            return new ResponseEntity<>(shoppingCartService.findAllByCustomer(customers.getId()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("")
    public ResponseEntity<?> saveCartSession(@RequestBody ShoppingCart shoppingCart, HttpServletRequest httpServletRequest) {
        List<ShoppingCart> shoppingCartList = new ArrayList<>();
        HttpSession session = httpServletRequest.getSession();
        if (session.getAttribute("cart") != null) {
            shoppingCartList = (List<ShoppingCart>) session.getAttribute("cart");
            int count = 0;
            for (int i = 0; i < shoppingCartList.size(); i++) {
                if (shoppingCart.getProducts().getId() == shoppingCartList.get(i).getProducts().getId()) {
                    shoppingCartList.get(i).setPrice((shoppingCartList.get(i).getQuantity() + shoppingCart.getQuantity()) * shoppingCartList.get(i).getProducts().getPrice());
                    shoppingCartList.get(i).setQuantity(shoppingCartList.get(i).getQuantity() + shoppingCart.getQuantity());
                    count++;
                }
            }
            if (count == 0) {
                shoppingCart.setPrice(shoppingCart.getProducts().getPrice() * shoppingCart.getQuantity());
                shoppingCartList.add(shoppingCart);
            }
        } else {
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice() * shoppingCart.getQuantity());
            shoppingCartList.add(shoppingCart);
            session.setAttribute("cart", shoppingCartList);

        }
        session.setAttribute("cart", shoppingCartList);
        return new ResponseEntity<>(session.getAttribute("cart"), HttpStatus.OK);
    }

    @PostMapping("/create/{id}/{quantity}")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER')")
    public ResponseEntity<?> createCart(@PathVariable("id") Long id, @PathVariable("quantity") Integer quantity) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            Products products = productService.getProduct(id);
            Customers customers = customerService.getCustomer(principal.getUsername());
            shoppingCartService.createCart(products, customers, quantity);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
