package com.home.carshop.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@ToString
public class SalesInfoDTO {
    private int salesNum;
    private String salesName;
    private String salesTel;
    private String salesColor;
    private LocalDateTime salesDate;
    private int modelNum;

// carInfo 연결
    private String modelName;
    private int carPrice;
}
