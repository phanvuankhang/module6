package com.example.wibu_shop.dto;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

public class CustomersDTO {
    private Long id;
    @NotBlank(message = "Tên không được để trống")
//    @Pattern(regexp = "^(\\s)*[A-Z][a-z]*(\\s)*([A-Z][a-z]*(\\s)*)*([A-Z][a-z]*(\\s)*)$",message = "Tên không được chứa số, ký tự đặc biệt như @,#,$... VD: Phan Vu An Khang")
    private String name;
    @NotBlank(message = "Địa chỉ không được để trống")
    private String birthday;
    private Integer gender;
    @NotBlank(message = "Số điện thoại không được để trống")
//    @Pattern(regexp = "^(\\+84)[0-9]{9}|0[0-9]{9}$",message= "Số điện thoại không đúng định dạng")
    private String phoneNumber;
    @NotBlank(message = "Email không được để trống")
    @Email(message="Email không hợp lệ. VD: wibushop@gmail.com")
    private String email;
    @NotBlank(message = "Địa chỉ không được để trống")
    private String address;
    private String image;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
    private boolean isDelete;
    private UsersDTO usersDTO;

    public CustomersDTO() {
    }

    public CustomersDTO(Long id, String name, String birthday, Integer gender, String phoneNumber, String email, String address, String image, LocalDateTime createDate, LocalDateTime updateDate, boolean isDelete, UsersDTO usersDTO) {
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
        this.usersDTO = usersDTO;
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

    public Integer getGender() {
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

    public UsersDTO getUsersDTO() {
        return usersDTO;
    }

    public void setUsersDTO(UsersDTO usersDTO) {
        this.usersDTO = usersDTO;
    }
}
