package com.example.wibu_shop.service.impl;

import com.example.wibu_shop.config.JwtUserDetails;
import com.example.wibu_shop.model.Users;
import com.example.wibu_shop.repository.IUserRepository;
import com.example.wibu_shop.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements IUserService, UserDetailsService {
    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Users findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = userRepository.findByUsername(username);
        if (users == null) {
            throw new UsernameNotFoundException("Không tìm thấy tài khoản: " + username);
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        String role = users.getRoles().getRole();
        authorities.add(new SimpleGrantedAuthority(role));
        return new JwtUserDetails(users.getId(), users.getUsername(), users.getPassword(), authorities);
    }
}
