package com.example.wibu_shop.controller;

import com.example.wibu_shop.config.JwtTokenUtil;
import com.example.wibu_shop.config.JwtUserDetails;
import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.ShoppingCart;
import com.example.wibu_shop.reponse.JwtRequest;
import com.example.wibu_shop.reponse.JwtResponse;
import com.example.wibu_shop.service.ICustomerService;
import com.example.wibu_shop.service.IShoppingCartService;
import com.example.wibu_shop.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;


@RequestMapping("/api/users")
@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true", maxAge = 3600)
public class UsersController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IShoppingCartService shoppingCartService;

    class ErrorInfo {
        private String error;
        private Long id;


    }


    @PostMapping("/authenticate")
    public ResponseEntity<?> loginAuthentication(@RequestBody JwtRequest authenticationRequest, HttpServletRequest httpServletRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            GrantedAuthority authority = principal.getAuthorities().stream().findFirst().orElse(null);
            final String token = jwtTokenUtil.generateToken(principal.getUsername());
            HttpSession session = httpServletRequest.getSession();
            if (session.getAttribute("cart") != null) {
                List<ShoppingCart> shoppingCartList = (List<ShoppingCart>) session.getAttribute("cart");
                Customers customers = customerService.getCustomer(principal.getUsername());
                try {
//                    shoppingCartService.deleteByCustomer(customers);
                } catch (Exception e) {
                    throw e;
                }
                for (int i = 0; i < shoppingCartList.size(); i++) {
                    shoppingCartService.createCart(shoppingCartList.get(i).getProducts(), customers, shoppingCartList.get(i).getQuantity());
                }
                session.removeAttribute("cart");
            }
            return ResponseEntity.ok(new JwtResponse(token, principal.getUsername(), authority != null ? authority.getAuthority() : null));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Đăng nhập thất bại!");
        }
    }
}
