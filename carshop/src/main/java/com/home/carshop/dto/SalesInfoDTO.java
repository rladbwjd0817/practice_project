package com.home.carshop.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

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
}
