package com.home.carshop.mapper;

import com.home.carshop.dto.SalesInfoDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SalesInfoMapper {

//  구매자 등록 쿼리 실행 메서드
  void regSales(SalesInfoDTO salesInfoDTO);
}
