package com.home.carshop.controller;

import com.home.carshop.dto.CarInfoDTO;
import com.home.carshop.service.CarInfoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/carshops")
@RequiredArgsConstructor
@Slf4j
public class CarInfoController {
  private final CarInfoService carInfoService;

//  차량등록 api
//  url : (POST) localhost:8080/carshops
  @PostMapping("")
  public ResponseEntity<?> regNewModel(@RequestBody CarInfoDTO carInfoDTO){
    try {
      log.info("새로운 차량을 등록합니다.");
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (Exception e){
      log.error("차량등록 api 실행 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }




}
