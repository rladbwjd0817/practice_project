package com.home.carshop.service;

import com.home.carshop.dto.CarInfoDTO;
import com.home.carshop.mapper.CarInfoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarInfoService {
  private final CarInfoMapper carInfoMapper;

//  신차 등록 기능 실행 메서드
  public void regNewModel(CarInfoDTO carInfoDTO){
    carInfoMapper.regNewModel(carInfoDTO);
  }

//  차량 목록 조회 기능 실행 메서드
  public List<CarInfoDTO> selectCarList(){
    return carInfoMapper.selectCarList();
  }

//  차량 모델 조회 기능 실행 메서드
  public List<CarInfoDTO> selectModelName(){
    return carInfoMapper.selectModelName();
  }


}
