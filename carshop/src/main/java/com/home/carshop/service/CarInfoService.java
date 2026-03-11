package com.home.carshop.service;

import com.home.carshop.dto.CarInfoDTO;
import com.home.carshop.mapper.CarInfoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CarInfoService {
  private final CarInfoMapper carInfoMapper;

  public void regNewModel(CarInfoDTO carInfoDTO){
    carInfoMapper.regNewModel(carInfoDTO);
  }
}
