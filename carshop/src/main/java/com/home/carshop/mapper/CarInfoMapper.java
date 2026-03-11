package com.home.carshop.mapper;

import com.home.carshop.dto.CarInfoDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CarInfoMapper {

//  차량등록 쿼리 실행 메서드
  void regNewModel(CarInfoDTO carInfoDTO);
}
