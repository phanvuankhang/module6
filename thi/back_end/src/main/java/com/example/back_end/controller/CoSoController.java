package com.example.back_end.controller;

import com.example.back_end.model.CoSo;
import com.example.back_end.model.QuanLy;
import com.example.back_end.service.ICoSoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/co-so")
public class CoSoController {
    @Autowired
    private ICoSoService coSoService;

    @GetMapping("")
    public ResponseEntity<Page<CoSo>> getAllCoSo(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                                 @RequestParam("name") String name, @RequestParam("nameEmployee") String nameEmployee) {
        Pageable pageable = PageRequest.of(page, 3);
        return new ResponseEntity<>(coSoService.getListCoSo(pageable, name, nameEmployee), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePenalty(@PathVariable("id") Long id) {
        boolean status = coSoService.deleteCoSo(id);
        if (!status) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HttpStatus> findById(@PathVariable("id") Long id) {
        coSoService.getIdCoSo(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> save(@Validated @RequestBody CoSo coSo, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {

            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        coSoService.save(coSo);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/quan-ly")
    public ResponseEntity<List<QuanLy>> getListQuanLy() {
        return new ResponseEntity<>(coSoService.getAllQuanLy(), HttpStatus.OK);
    }
}
