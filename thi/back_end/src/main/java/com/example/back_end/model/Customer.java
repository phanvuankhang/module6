package com.example.back_end.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String codeCart;
    @ManyToOne
    @JoinColumn
    private CoSo coSo;
    @NotBlank
    private String name;
    @NotBlank
    private String idCart;
    @NotBlank
    private String birthDay;
    @NotBlank
    private boolean gender;
    @NotBlank
    private String startDay;
    @NotBlank
    private String endDay;

    public Customer() {
    }

    public Customer(Long id, String codeCart, CoSo coSo, String name, String idCart, String birthDay, boolean gender, String startDay, String endDay) {
        this.id = id;
        this.codeCart = codeCart;
        this.coSo = coSo;
        this.name = name;
        this.idCart = idCart;
        this.birthDay = birthDay;
        this.gender = gender;
        this.startDay = startDay;
        this.endDay = endDay;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeCart() {
        return codeCart;
    }

    public void setCodeCart(String codeCart) {
        this.codeCart = codeCart;
    }

    public CoSo getCoSo() {
        return coSo;
    }

    public void setCoSo(CoSo coSo) {
        this.coSo = coSo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdCart() {
        return idCart;
    }

    public void setIdCart(String idCart) {
        this.idCart = idCart;
    }

    public String getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(String birthDay) {
        this.birthDay = birthDay;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getEndDay() {
        return endDay;
    }

    public void setEndDay(String endDay) {
        this.endDay = endDay;
    }
}
