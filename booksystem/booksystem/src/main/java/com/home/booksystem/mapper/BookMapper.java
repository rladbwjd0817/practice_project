package com.home.booksystem.mapper;

import com.home.booksystem.dto.BookDTO;
import org.apache.ibatis.annotations.Mapper;

import java.awt.print.Book;
import java.util.List;

@Mapper
public interface BookMapper {
//    도서 목록 조회 쿼리 실행 메서드
    List<BookDTO> bookList();

//    도서 등록 쿼리 실행 메서드
    void regBook(BookDTO bookDTO);

//    상세조회 쿼리 실행 메서드
    BookDTO detailData(int bookNum);

//    도서 수정 쿼리 실행 메서드
    void putBookData(BookDTO bookDTO);

//    도서 삭제 쿼리 실행 메서드
    void deleteBookData(int bookNum);

//    검색 쿼리 실행 메서드
    List<BookDTO> searchData(String keyword);
}
