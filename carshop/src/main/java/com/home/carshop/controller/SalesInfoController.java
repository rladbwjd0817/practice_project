package com.home.carshop.controller;


import com.home.carshop.dto.SalesInfoDTO;
import com.home.carshop.service.SalesInfoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
@Slf4j
public class SalesInfoController {
  private final SalesInfoService salesInfoService;

//  구매자 등록 api
//  url : (POST) localhost:8080/sales
  @PostMapping("")
  public ResponseEntity<?> regSales(@RequestBody SalesInfoDTO salesInfoDTO){
    try {
      log.info("구매자 등록을 합니다");
      salesInfoService.regSales(salesInfoDTO);
      return ResponseEntity.status(HttpStatus.CREATED).build();
    }catch (Exception e){
      log.error("구매자 등록 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

//  구매자 목록 조회 api
//  url : (GET) localhost:8080/sales
  @GetMapping("")
  public ResponseEntity<?> salesList(){
    try {
      log.info("구매자 목록을 조회합니다.");
      List<SalesInfoDTO> salesListResult = salesInfoService.salesList();
      return ResponseEntity.status(HttpStatus.OK).body(salesListResult);
    }catch (Exception e){
      log.error("구매자 목록 조회 중 오류 발생", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }


}
