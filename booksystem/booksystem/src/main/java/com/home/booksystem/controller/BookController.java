package com.home.booksystem.controller;

import com.home.booksystem.dto.BookDTO;
import com.home.booksystem.survice.BookSurvice;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
