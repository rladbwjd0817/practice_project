package com.home.carshop.mapper;

import com.home.carshop.dto.CarInfoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CarInfoMapper {

//  차량등록 쿼리 실행 메서드
  void regNewModel(CarInfoDTO carInfoDTO);

//  차량 목록 조회 쿼리 실행 메서드
  List<CarInfoDTO> selectCarList();



}
