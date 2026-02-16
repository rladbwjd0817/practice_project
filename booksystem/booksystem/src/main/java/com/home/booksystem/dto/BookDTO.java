package com.home.booksystem.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class BookDTO {
    private int bookNum;
    private String bookTitle;
    private String author;
    private String publisher;
    private int bookPrice;
    private int bookStock;
    private String bookIntro;
    private LocalDateTime regDate;

}
