package com.example.wibu_shop.controller;

import com.example.wibu_shop.model.Images;
import com.example.wibu_shop.service.IImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/image")
@RestController
@CrossOrigin("*")
public class ImageController {
    @Autowired
    private IImagesService imageService;
    @GetMapping("/{id}")
    public ResponseEntity<List<Images>> getDetailProduct(@PathVariable("id") Long id){
        try{
            return new ResponseEntity<>(imageService.getAllImages(id), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
