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
    ResponseEntity<List<ShoppingCart>> getAllCart(HttpServletRequest httpServletRequest) {
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
                ShoppingCart cartItem = shoppingCartList.get(i);
                if (shoppingCart.getProducts().getId() == cartItem.getProducts().getId()) {
                    int availableQuantity = shoppingCart.getProducts().getQuantity();
                    int requestedQuantity = cartItem.getQuantity() + shoppingCart.getQuantity();
                    if (requestedQuantity > availableQuantity) {
                        return new ResponseEntity<>("Số lượng sản phẩm trong giỏ hàng vượt quá số lượng có sẵn trong kho.", HttpStatus.BAD_REQUEST);
                    }else {
                        cartItem.setPrice(requestedQuantity * cartItem.getProducts().getPrice());
                        cartItem.setQuantity(requestedQuantity);
                        count++;
                    }
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
        return new ResponseEntity<>(session.getAttribute("cart"),HttpStatus.OK);
    }

    @DeleteMapping("delete-session/{id}")
    public ResponseEntity<?> deleteCartToSession(@PathVariable Long id, HttpServletRequest httpServletRequest) {
        List<ShoppingCart> shoppingCartList = new ArrayList<>();
        HttpSession session = httpServletRequest.getSession();
        if (session.getAttribute("cart") != null) {
            shoppingCartList = (List<ShoppingCart>) session.getAttribute("cart");
            for (int i = 0; i < shoppingCartList.size(); i++) {
                if (id == shoppingCartList.get(i).getProducts().getId()) {
                    shoppingCartList.remove(i);
                }
            }
            session.setAttribute("cart", shoppingCartList);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCart(@PathVariable Long id) {
        try {
            shoppingCartService.deleteCart(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/create/{id}/{quantity}")
    @PreAuthorize("hasAnyRole('ROLE_CUSTOMER')")
    public ResponseEntity<?> createCart(@PathVariable("id") Long id, @PathVariable("quantity") Integer quantity) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            Products products = productService.getProduct(id);
            Customers customers = customerService.getCustomer(principal.getUsername());
            return shoppingCartService.createCart(products, customers, quantity);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/{index}/{id}")
    public ResponseEntity<?> setCart(@PathVariable Integer index, @PathVariable Long id, HttpServletRequest httpServletRequest) {
        List<ShoppingCart> shoppingCartList = new ArrayList<>();
        HttpSession session = httpServletRequest.getSession();
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication.getPrincipal().equals("anonymousUser")) {
                shoppingCartList = (List<ShoppingCart>) session.getAttribute("cart");
                if (shoppingCartList != null) {
                    for (int i = 0; i < shoppingCartList.size(); i++) {
                        if (shoppingCartList.get(i).getProducts().getId() == id) {
                            if (index == 0) {
                                shoppingCartList.get(i).setPrice(shoppingCartList.get(i).getProducts().getPrice() * (shoppingCartList.get(i).getQuantity() - 1));
                                shoppingCartList.get(i).setQuantity(shoppingCartList.get(i).getQuantity() - 1);
                            } else {
                                if (shoppingCartList.get(i).getQuantity() >= shoppingCartList.get(i).getProducts().getQuantity()) {
                                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                                } else {
                                    shoppingCartList.get(i).setPrice(shoppingCartList.get(i).getProducts().getPrice() * (shoppingCartList.get(i).getQuantity() + 1));
                                    shoppingCartList.get(i).setQuantity(shoppingCartList.get(i).getQuantity() + 1);
                                }
                            }
                        }
                    }
                }
                session.setAttribute("cart", shoppingCartList);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return shoppingCartService.setCart(index, id);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}



