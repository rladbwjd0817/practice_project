package com.house.practiceitem.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class ItemDTO {
    private int itemNo;
    private String itemName;
    private int itemPrice;
    private String regname;
    private String itemIntro;
    private LocalDateTime regdate;
    private int itemCnt;

}
