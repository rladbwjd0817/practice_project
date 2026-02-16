create table BOOK(
	BOOK_NUM INT primary key AUTO_INCREMENT
	, BOOK_TITLE VARCHAR(100) not null 
	, AUTHOR VARCHAR(50) not null
	, PUBLISHER VARCHAR(50) not null
	, BOOK_PRICE int default 0 not null
	, BOOK_STOCK int not null
	, BOOK_INTRO TEXT
	, REG_DATE DATETIME default SYSDATE()
);

select * from BOOK;
