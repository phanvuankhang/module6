package com.example.wibu_shop.repository;

import com.example.wibu_shop.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Products, Long> {
    @Query(value = "select p.id,p.name,p.price,p.quantity,p.description  ,p.product_type_id,p.create_date,p.update_date,p.is_delete,\n" +
            "       i.image       as image\n" +
            "from products p\n" +
            "         inner join images i on p.id = i.product_id\n" +
            "         inner join product_type pt on p.product_type_id = pt.id\n" +
            "where p.is_delete = false\n" +
            "  and pt.name like concat('%', :name, '%')\n" +
            "  AND i.id IN (select min(i.id)\n" +
            "               from images i\n" +
            "               group by i.product_id)", nativeQuery = true)
    Page<Products> getAll(Pageable pageable, @Param("name")String name);
}
