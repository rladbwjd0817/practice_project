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

//    도서 등록 기능 실행 메서드
    public void regBook(BookDTO bookDTO){
        bookMapper.regBook(bookDTO);
    }

//    상세조회 기능 실행 메서드
    public BookDTO detailData(int bookNum){
        return bookMapper.detailData(bookNum);
    }

//    도서 수정 기능 실행 메서드
    public void putBookData(BookDTO bookDTO){
        bookMapper.putBookData(bookDTO);
    }

//    도서 삭제 기능 실행 메서드
    public void deleteBookData(int bookNum){
        bookMapper.deleteBookData(bookNum);
    }

}
