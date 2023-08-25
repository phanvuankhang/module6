package com.example.back_end.service.impl;

import com.example.back_end.model.CoSo;
import com.example.back_end.model.QuanLy;
import com.example.back_end.repository.ICoSoRepository;
import com.example.back_end.repository.IQuanLyRepository;
import com.example.back_end.service.ICoSoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoSoServiceImpl implements ICoSoService {
    @Autowired
    private ICoSoRepository coSoRepository;
    @Autowired
    private IQuanLyRepository quanLyRepository;


    @Override
    public Page<CoSo> getListCoSo(Pageable pageable, String name, String nameEmployee) {
        return coSoRepository.getListCoSo(pageable, name, nameEmployee);
    }

    @Override
    public boolean deleteCoSo(Long id) {
        try {
            coSoRepository.deleteById(id);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    @Override
    public void save(CoSo coSo) {
        coSoRepository.save(coSo);
    }

    @Override
    public List<QuanLy> getAllQuanLy() {
        return quanLyRepository.findAll();
    }

    @Override
    public QuanLy getIdCoSo(Long id) {
       return quanLyRepository.findById(id).get();
    }
}
