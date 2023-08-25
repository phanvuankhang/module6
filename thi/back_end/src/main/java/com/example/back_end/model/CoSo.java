package com.example.back_end.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class CoSo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String name;
    @NotBlank
    private String startDate;
    @NotBlank
    private String address;
    @OneToOne
    @JoinColumn
    private QuanLy quanLy;

    public CoSo() {
    }

    public CoSo(Long id, String name, String startDate, String address, QuanLy quanLy) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.address = address;
        this.quanLy = quanLy;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public QuanLy getQuanLy() {
        return quanLy;
    }

    public void setQuanLy(QuanLy quanLy) {
        this.quanLy = quanLy;
    }
}
