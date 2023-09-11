package com.example.wibu_shop.service.impl;

import com.example.wibu_shop.dto.CustomersDTO;
import com.example.wibu_shop.dto.UsersDTO;
import com.example.wibu_shop.model.Customers;
import com.example.wibu_shop.model.Roles;
import com.example.wibu_shop.model.Users;
import com.example.wibu_shop.repository.ICustomerRepository;
import com.example.wibu_shop.repository.IUserRepository;
import com.example.wibu_shop.service.ICustomerService;
import com.example.wibu_shop.service.IRolesRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;
    @Autowired
    private IRolesRepository rolesRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private IUserRepository userRepository;

    @Override
    public Customers getCustomer(String customer) {
        return customerRepository.findByUsers_Username(customer);
    }

    @Override
    public void createCustomer(CustomersDTO customersDTO) {
        UsersDTO usersDTO = new UsersDTO();
        Customers customers=new Customers();
        BeanUtils.copyProperties(customersDTO,customers);

        Users users=new Users(null,usersDTO.getUsername(),usersDTO.getPassword(),null,null);
        BeanUtils.copyProperties(customersDTO.getUsersDTO(),users);
        users.setRoles(new Roles(2L,"ROLE_CUSTOMER"));
        String password = passwordEncoder.encode(customersDTO.getUsersDTO().getPassword());
        users.setPassword(password);
        users.setUsername(customersDTO.getUsersDTO().getUsername());
        userRepository.save(users);
        customers.setUsers(users);
        customerRepository.save(customers);
    }
}
