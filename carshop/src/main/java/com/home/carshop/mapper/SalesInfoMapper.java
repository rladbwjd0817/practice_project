package com.home.carshop.mapper;

import com.home.carshop.dto.SalesInfoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SalesInfoMapper {

//  구매자 등록 쿼리 실행 메서드
  void regSales(SalesInfoDTO salesInfoDTO);

//  구매자 목록 리스트 조회 쿼리 실행 메서드
  List<SalesInfoDTO> salesList();
}
