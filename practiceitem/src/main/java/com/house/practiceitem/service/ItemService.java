package com.house.practiceitem.service;

import com.house.practiceitem.dto.ItemDTO;
import com.house.practiceitem.mapper.ItemMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {
    private final ItemMapper itemMapper;



//    전체 상품 목록 조회 기능 실행 메서드
    public List<ItemDTO> allItemList(){
        return itemMapper.allItemList();
    }

//    신상품 등록 기능 실행 메서드
    public void postItem(ItemDTO itemDTO){
        itemMapper.regItem(itemDTO);
    }

//    한 상품만 조회 기능 실행 메서드
    public ItemDTO selectOneItem(int itemNo){
        return itemMapper.oneItem(itemNo);
    }

//    상품 삭제 기능 실행 메서드
    public void deleteData(int itemNo){
        itemMapper.deleteData(itemNo);
    }


}
