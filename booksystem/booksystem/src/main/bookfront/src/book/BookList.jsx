import React, { useEffect, useState } from 'react'
import { goList, goSearch } from '../api/bookApi';
import { useNavigate } from 'react-router-dom';
import Input from '../component/Input'
import styles from './Book.module.css'
import { PiBooks } from 'react-icons/pi';
import { IoSearch } from "react-icons/io5";

const BookList = () => {
  const nav = useNavigate();

  /* 조회한 도서 데이터 저장할 state 변수 */
  const [bookList, setBookList] = useState([]);

  /* 검색한 데이터 저장할 state 변수 */
  const [searchData, setSearchData] = useState([]);

  /* keyword state 함수 */
  const [keyword, setKeyword] = useState('')

  /* 조회 실행 함수 */
  const getList = async () => {
    const response = await goList();
    setBookList(response.data);
  }

  console.log(bookList);
  console.log(searchData);
  console.log(keyword);
  

  /* 검색 실행 함수 */
  const getSearch = async () => {
    const response = await goSearch(keyword);
    setSearchData(response.data);
  }

  /* 마운트 시 바로 조회 */
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h2> 
          <PiBooks className={styles.icon} /> 
          Book List 
          <PiBooks className={styles.icon} />
        </h2>
      </div>
      <div className={styles.search_div}>
        <div className={styles.input_wrap}>
          <IoSearch className={styles.search_icon}/>
          <Input 
            className={styles.search_Input}
            onChange={e => {setKeyword(e.target.value)}}
            onKeyDown={e => {
              if(e.key === 'Enter'){
                getSearch();
              }
            }}
          />
        </div>
      </div>
      <div className={styles.table_div}>
        <table>
          <thead className={styles.title_thead}>
            <tr >
              <td>No</td>
              <td>도서명</td>
              <td>저자</td>
              <td>출판사</td>
              <td>가격</td>
              <td>재고수량</td>
              <td>등록일</td>
            </tr>
          </thead>
          <tbody className={styles.tbody_div}>
            {/* list map 돌리기 */}
            {
              (searchData.length > 0 ? searchData : bookList).map((book, index) => {
                return(
                  <tr key={book.bookNum}>
                    <td>{bookList.length - index}</td>
                    <td
                      onClick={e => nav(`/detail/${book.bookNum}`)}
                    >{book.bookTitle}</td>
                    <td>{book.author}</td>
                    <td>{book.publisher}</td>
                    <td>{book.bookPrice}</td>
                    <td 
                      style={{color : book.bookStock <= 5 ? 'red' : 'black'}}

                    >{book.bookStock === 0 ? '품절' : book.bookStock}</td>
                    <td>{book.regDate}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div>
        <button 
          className={styles.reg_button}
          type='button'
          onClick={e => nav('/reg')}
        >도서등록</button>
      </div>
    </div>
  )
}

export default BookList