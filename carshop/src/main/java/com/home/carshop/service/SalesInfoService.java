package com.home.carshop.service;

import com.home.carshop.dto.SalesInfoDTO;
import com.home.carshop.mapper.SalesInfoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SalesInfoService {
  private final SalesInfoMapper salesInfoMapper;

//  구매자 등록 기능 실행 메서드
  public void regSales(SalesInfoDTO salesInfoDTO){
    salesInfoMapper.regSales(salesInfoDTO);
  }

}
