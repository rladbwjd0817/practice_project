package com.home.booksystem.survice;

import com.home.booksystem.dto.BookDTO;
import com.home.booksystem.mapper.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookSurvice {
    private final BookMapper bookMapper;

//    도서 목록 조회 기능 실행 메서드
    public List<BookDTO> bookList(){
        return bookMapper.bookList();
    }

}
