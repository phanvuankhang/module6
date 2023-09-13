package com.example.wibu_shop.repository;

import com.example.wibu_shop.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Products, Long> {
    @Query(value = "select p.id,\n" +
            "       p.name,\n" +
            "       p.price,\n" +
            "       p.quantity,\n" +
            "       p.description,\n" +
            "       p.image,\n" +
            "       p.product_type_id,\n" +
            "       p.create_date,\n" +
            "       p.update_date,\n" +
            "       p.is_delete\n" +
            "from products as p\n" +
            "         inner join product_type as t on t.id = p.product_type_id\n" +
            "where t.name like concat('%', :name, '%')\n" +
            "  and p.is_delete = false", nativeQuery = true)
    Page<Products> getAll(Pageable pageable, @Param("name")String name);
}
