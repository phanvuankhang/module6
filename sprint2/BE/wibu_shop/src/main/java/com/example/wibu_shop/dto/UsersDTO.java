package com.example.wibu_shop.dto;

import com.example.wibu_shop.model.Roles;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UsersDTO {
    private Long id;
    @NotBlank(message = "Tên đăng nhập không được để trống")
    @Size(min = 8, max = 20, message = "Tên đăng nhập từ 8-20 ký tự")
    @Pattern(regexp = "^[a-z0-9]{8,}$", message = "Tên đăng nhập phải là ký tự thường")
    private String username;
    @NotBlank(message = "Mật khẩu không được để trống")
    @Pattern(regexp = "^[a-z0-9]{8,}$", message = "Mật khẩu ít nhất 8 ký tự và không chứa ký tự đặt biệt như @,#,$... ")
    private String password;
    private Integer verifyCode;
    private Roles roles;

    public UsersDTO() {
    }

    public UsersDTO(Long id, String username, String password, Integer verifyCode, Roles roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.verifyCode = verifyCode;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getVerifyCode() {
        return verifyCode;
    }

    public void setVerifyCode(Integer verifyCode) {
        this.verifyCode = verifyCode;
    }

    public Roles getRoles() {
        return roles;
    }

    public void setRoles(Roles roles) {
        this.roles = roles;
    }
}
