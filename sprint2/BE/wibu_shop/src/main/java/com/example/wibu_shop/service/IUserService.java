package com.example.wibu_shop.service;

import com.example.wibu_shop.model.Users;

public interface IUserService {
    Users findByUsername(String username);
}
