package com.example.wibu_shop.repository;

import com.example.wibu_shop.dto.IProductDTO;
import com.example.wibu_shop.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Products, Long> {
    @Query(value = "select p.id          as id,\n" +
            "       p.name        as name,\n" +
            "       p.price       as price,\n" +
            "       p.quantity    as quantity,\n" +
            "       pt.name       as productType,\n" +
            "       p.description as description,\n" +
            "       i.image       as image\n" +
            "from products p\n" +
            "         inner join images i on p.id = i.product_id\n" +
            "         inner join product_type pt on p.product_type_id = pt.id\n" +
            "where p.is_delete = false\n" +
            "  and pt.name like concat('%', :name, '%')\n" +
            "  AND i.id IN (select min(i.id)\n" +
            "               from images i\n" +
            "               group by i.product_id)", nativeQuery = true)
    Page<IProductDTO> getAll(Pageable pageable, @Param("name")String name);
}
