package com.home.carshop.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString
public class CarInfoDTO {
  private int modelNum;
  private String modelName;
  private int carPrice;
  private String manufacturer;
}
