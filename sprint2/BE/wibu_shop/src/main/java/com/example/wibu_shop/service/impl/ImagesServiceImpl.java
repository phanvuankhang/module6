package com.example.wibu_shop.service.impl;

import com.example.wibu_shop.model.Images;
import com.example.wibu_shop.repository.IImagesRepository;
import com.example.wibu_shop.service.IImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImagesServiceImpl implements IImagesService {
    @Autowired
    private IImagesRepository imagesRepository;


    @Override
    public List<Images> getAllImages(Long id) {
        return imagesRepository.findAllByProducts_Id(id);
    }
}
