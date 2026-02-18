package com.home.booksystem.controller;

import com.home.booksystem.dto.BookDTO;
import com.home.booksystem.survice.BookSurvice;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/books")
@Slf4j
public class BookController {
    private final BookSurvice bookSurvice;

//  도서 목록 조회 api
//  url: (GET) localhost:8080/books
    @GetMapping("")
    public ResponseEntity<?> bookList(){
        try {
            log.info("도서 목록을 조회합니다.");
            List<BookDTO> list = bookSurvice.bookList();
            log.info("도서 목록 조회를 완료했습니다.");
            return ResponseEntity.status(HttpStatus.OK).body(list);
        }catch (Exception e){
            log.error("도서 목록 조회 중 오류 발생했습니다.", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    도서 등록 api
//    url : (POST) localhost:8080/books
    @PostMapping("")
    public ResponseEntity<?> regBook(@RequestBody BookDTO bookDTO){
        try {
            log.info("새로운 도서를 등록합니다.");
            bookSurvice.regBook(bookDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(bookDTO);
        }catch (Exception e){
            log.error("새로운 도서 등록 중 오류 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    상세조회 api
//    url : (GET) localhost:8080/books/{bookNum}
    @GetMapping("/{bookNum}")
    public ResponseEntity<?> detailData(@PathVariable("bookNum") int bookNum){
        try {
            log.info(bookNum + "번 도서를 상세조회 합니다.");
            BookDTO detailResult = bookSurvice.detailData(bookNum);
            return ResponseEntity.status(HttpStatus.OK).body(detailResult);
        }catch (Exception e){
            log.error("상세조회 중 오류 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 도서 수정 api
    // url : (PUT) localhost:8080/books/{bookNum}/update
    @PutMapping("/{bookNum}/update")
    public ResponseEntity<?> putBookData(@PathVariable("bookNum") int bookNum,
                                             @RequestBody BookDTO bookDTO){
        try {
            log.info("도서를 수정합니다.");
            bookDTO.setBookNum(bookNum);
            bookSurvice.putBookData(bookDTO);
            return ResponseEntity.status(HttpStatus.OK).body(bookDTO);
        }catch (Exception e){
            log.error("도서 수정 중 오류 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 도서 삭제 api
    // url : (DELETE) localhost:8080/books/{bookNum}
    @DeleteMapping("/{bookNum}")
    public ResponseEntity<?> deleteBookData(@PathVariable("bookNum") int bookNum){
        try {
            log.info(bookNum + "번 도서를 삭제했습니다.");
            bookSurvice.deleteBookData(bookNum);
            return ResponseEntity.status(HttpStatus.OK).body(bookNum);
        }catch (Exception e){
            log.error("도서 삭제 중 오류 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    검색 api
//    url : localhost:8080/books/search
    @GetMapping("/search")
    public ResponseEntity<?> searchData(@RequestParam String keyword){
        try {
            log.info("검색을 실행합니다.");
            List<BookDTO> searchResult = bookSurvice.searchData(keyword);
            return ResponseEntity.status(HttpStatus.OK).body(searchResult);
        }catch (Exception e){
            log.error("검색 중 오류 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }



}
