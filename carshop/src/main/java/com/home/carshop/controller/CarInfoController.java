package com.home.carshop.controller;

import com.home.carshop.dto.CarInfoDTO;
import com.home.carshop.service.CarInfoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
      carInfoService.regNewModel(carInfoDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (Exception e){
      log.error("차량등록 api 실행 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  차량목록 조회 api
//  url : (GET) localhost:8080/carshops
  @GetMapping("")
  public ResponseEntity<?> selectCarList(){
    try {
      log.info("차량 목록 조회를 실행합니다.");
      List<CarInfoDTO> selectListResult = carInfoService.selectCarList();
      return ResponseEntity.status(HttpStatus.OK).body(selectListResult);
    }catch (Exception e){
      log.error("차량목록 조회 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  차량 모델명 조회 api
//  url : (GET) localhost:8080/carshops/models
  @GetMapping("/models")
  public ResponseEntity<?> selectModelName(){
    try {
      log.info("차량 모델명을 조회합니다.");
      List<String> carModelList = carInfoService.selectModelName();
      return ResponseEntity.status(HttpStatus.OK).body(carModelList);
    }catch (Exception e){
      log.error("차량 모델명 조회 중 오류 발생",e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }



}
