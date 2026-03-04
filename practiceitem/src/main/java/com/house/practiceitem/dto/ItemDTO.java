package com.house.practiceitem.dto;

import com.house.practiceitem.member.dto.MemberDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

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

//    한 구매자 당 여러 상품 구매(1 : 다)
    private String memName;
}
