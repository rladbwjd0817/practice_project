package com.house.practiceitem.controller;

import com.house.practiceitem.dto.ItemDTO;
import com.house.practiceitem.service.ItemService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/items")
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;


//    전체 상품 조회 기능 api
//    url : (GET) localhost:8080/items
    @GetMapping("")
    public ResponseEntity<List<ItemDTO>> allItemList(){
        try {
            log.info("상품목록을 조회합니다.");
            List<ItemDTO> result = itemService.allItemList();
            return ResponseEntity.status(HttpStatus.OK).body(result);
        }catch (Exception e){
            log.error("상품목록 조회 중 오류가 발생했습니다.", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    신상품 등록 기능 api
//    url : (POST) localhost:8080/items
    @PostMapping("")
    public void postItem(@RequestBody ItemDTO itemDTO){
        System.out.println("신상품을 등록합니다.");
        itemService.postItem(itemDTO);
    }

//    상품 상세조회 api
//    url : (GET) localhost:8080/items/3
    @GetMapping("/{itemNo}")
    public ResponseEntity<?> getOneItem(@PathVariable("itemNo") int itemNo){
        try {
            log.info(itemNo + "번 상품 상세조회");
            ItemDTO detailResult = itemService.selectOneItem(itemNo);
            return ResponseEntity.status(HttpStatus.OK).body(detailResult);
        }catch (Exception e){
            log.error("상세조회 중 오류 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    상품 삭제 api
//    url: (DELETE) localhost:8080/items/4
    @DeleteMapping("/{itemNo}")
    public ResponseEntity<?> deleteData(@PathVariable("itemNo") int itemNo){
        try {
            log.info(itemNo + "번 상품 삭제");
            itemService.deleteData(itemNo);
            return ResponseEntity.status(HttpStatus.OK).body(itemNo);
        }catch (Exception e){
            log.error("상품 삭제 중 오류 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }




}
