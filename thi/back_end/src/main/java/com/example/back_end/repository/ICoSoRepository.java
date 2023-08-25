package com.example.back_end.repository;

import com.example.back_end.model.CoSo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ICoSoRepository extends JpaRepository<CoSo, Long> {
    @Query(value = "select * from co_so c\n" +
            "    inner join quan_ly q on c.quan_ly_id=q.id\n" +
            "         where c.name like concat('%',:name,'%')\n" +
            "           and q.name like concat('%',:nameEmployee,'%')", nativeQuery = true)
    Page<CoSo> getListCoSo(Pageable pageable, @Param("name")String name,@Param("nameEmployee")String nameEmployee);
}
