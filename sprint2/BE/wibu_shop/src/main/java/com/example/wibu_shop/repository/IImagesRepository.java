package com.example.wibu_shop.repository;


import com.example.wibu_shop.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IImagesRepository extends JpaRepository<Images,Long> {

    List<Images> findAllByProducts_Id(Long id);
}
