package com.example.wibu_shop.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Customers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false, columnDefinition = "VARCHAR(100)")
    private String name;
    @Column(name = "birthday", nullable = false)
    private String birthday;
    @Column(name = "gender", nullable = false)
    private Integer gender;
    @Column(name = "phone_number", nullable = false, columnDefinition = "VARCHAR(10)")
    private String phoneNumber;
    @Column(name = "email", nullable = false, unique = true, columnDefinition = "VARCHAR(250)")
    private String email;
    @Column(name = "address", nullable = false, columnDefinition = "VARCHAR(250)")
    private String address;
    private String image;
    @CreationTimestamp
    @Column(name = "create_date", columnDefinition = "DATETIME DEFAULT now()", updatable = false)
    private LocalDateTime createDate;
    @UpdateTimestamp
    @Column(name = "update_date", columnDefinition = "DATETIME DEFAULT now()")
    private LocalDateTime updateDate;
    @Column(name = "is_delete", columnDefinition = "BIT DEFAULT 0")
    private boolean isDelete;
    @OneToOne
    @JoinColumn(name = "user_id")
    private Users users;

    public Customers() {
    }

    public Customers(Long id, String name, String birthday, Integer gender, String phoneNumber, String email, String address, String image, LocalDateTime createDate, LocalDateTime updateDate, boolean isDelete, Users users) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.image = image;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.isDelete = isDelete;
        this.users = users;
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

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public Integer isGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
