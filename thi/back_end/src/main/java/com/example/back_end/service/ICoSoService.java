package com.example.back_end.service;

import com.example.back_end.model.CoSo;
import com.example.back_end.model.QuanLy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICoSoService {
    Page<CoSo> getListCoSo(Pageable pageable,String name, String nameEmployee);
    boolean deleteCoSo(Long id);
    void save(CoSo coSo);
    List<QuanLy> getAllQuanLy();
    QuanLy getIdCoSo(Long id);
}
