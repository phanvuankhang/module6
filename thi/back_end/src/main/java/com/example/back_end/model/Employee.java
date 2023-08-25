package com.example.back_end.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String codeEmployee;
    @NotBlank
    private String name;
    @NotBlank
    private String birthDay;
    @NotBlank
    private boolean gender;
    @ManyToOne
    @JoinColumn
    private CoSo coSo;

    public Employee() {
    }

    public Employee(Long id, String codeEmployee, String name, String birthDay, boolean gender, CoSo coSo) {
        this.id = id;
        this.codeEmployee = codeEmployee;
        this.name = name;
        this.birthDay = birthDay;
        this.gender = gender;
        this.coSo = coSo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeEmployee() {
        return codeEmployee;
    }

    public void setCodeEmployee(String codeEmployee) {
        this.codeEmployee = codeEmployee;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public CoSo getCoSo() {
        return coSo;
    }

    public void setCoSo(CoSo coSo) {
        this.coSo = coSo;
    }
}
