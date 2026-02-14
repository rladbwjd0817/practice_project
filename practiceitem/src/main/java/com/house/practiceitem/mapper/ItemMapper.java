package com.house.practiceitem.mapper;

import com.house.practiceitem.dto.ItemDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ItemMapper {

//    전체 상품 목록 조회 쿼리 실행 메서드
    List<ItemDTO> allItemList();

//    신상품 등록 쿼리 실행 메서드
    void regItem(ItemDTO itemDTO);

//    한 상품만 조회 쿼리 실행 메서드
    ItemDTO oneItem(int itemNo);

//    상품 삭제 쿼리 실행 메서드
    void deleteData(int itemNo);

}
