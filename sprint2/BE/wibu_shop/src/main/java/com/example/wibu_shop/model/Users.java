package com.example.wibu_shop.model;

import javax.persistence.*;

@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "username", nullable = false, unique = true, columnDefinition = "VARCHAR(100)")
    private String username;
    @Column(name = "password", nullable = false, columnDefinition = "TEXT")
    private String password;
    @Column(name = "verifyCode", columnDefinition = "VARCHAR(5)")
    private Integer verifyCode;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Roles roles;

    public Users() {
    }

    public Users(Long id, String username, String password, Integer verifyCode, Roles roles) {
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

    public void setUsername(String name) {
        this.username = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String passwork) {
        this.password = passwork;
    }

    public Integer getVerificationCode() {
        return verifyCode;
    }

    public void setVerificationCode(Integer verificationCode) {
        this.verifyCode = verificationCode;
    }

    public Roles getRoles() {
        return roles;
    }

    public void setRoles(Roles roles) {
        this.roles = roles;
    }
}
