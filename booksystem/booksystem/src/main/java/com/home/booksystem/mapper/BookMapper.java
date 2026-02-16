package com.home.booksystem.mapper;

import com.home.booksystem.dto.BookDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {
//    도서 목록 조회 쿼리 실행 메서드
    List<BookDTO> bookList();



}
