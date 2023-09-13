package com.example.wibu_shop.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false, columnDefinition = "VARCHAR(150)")
    private String name;
    @Column(name = "price", nullable = false)
    private Long price;
    @Column(name = "quantity", nullable = false)
    private Integer quantity;
    @Column(name = "is_delete", columnDefinition = "BIT DEFAULT 0")
    private boolean isDelete;
    @Column(name = "description",length = 1000)
    private String description;
    @CreationTimestamp
    @Column(name = "create_date", columnDefinition = "DATETIME DEFAULT now()", updatable = false)
    private LocalDateTime createDate;
    @UpdateTimestamp
    @Column(name = "update_date", columnDefinition = "DATETIME DEFAULT now()")
    private LocalDateTime updateDate;
    @ManyToOne
    @JoinColumn(name = "product_type_id")
    private ProductType productType;
    private String image;

    public Products() {
    }

    public Products(Long id, String name, Long price, Integer quantity, boolean isDelete, String description, LocalDateTime createDate, LocalDateTime updateDate, ProductType productType, String image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.isDelete = isDelete;
        this.description = description;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.productType = productType;
        this.image = image;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

}
