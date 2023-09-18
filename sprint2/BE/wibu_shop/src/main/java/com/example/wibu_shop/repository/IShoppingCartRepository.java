package com.example.wibu_shop.repository;

import com.example.wibu_shop.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {

    List<ShoppingCart> findAllByCustomers_Id(@Param("id") Long id);

    @Query(value = "select * from shopping_cart where product_id = :idProduct and customer_id = :idCustomer", nativeQuery = true)
    ShoppingCart getCartToCreate(Long idProduct, Long idCustomer);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM shopping_cart WHERE customer_id = :id",nativeQuery = true)
    void deleteByCustomer(@Param("id") Long id);

}
