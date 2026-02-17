import React, { useEffect, useState } from 'react'
import { goList } from '../api/bookApi';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const nav = useNavigate();

  /* 조회한 도서 데이터 저장할 state 변수 */
  const [bookList, setBookList] = useState([]);

  /* 조회 실행 함수 */
  const getList = async () => {
    const response = await goList();
    setBookList(response.data);
  }

  console.log(bookList);


  /* 마운트 시 바로 조회 */
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <div>
        <h2>도서 목록 List</h2>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>도서명</td>
              <td>저자</td>
              <td>출판사</td>
              <td>가격</td>
              <td>재고수량</td>
              <td>등록일</td>
            </tr>
          </thead>
          <tbody>
            {/* list map 돌리기 */}
            {
              bookList.map((book, index) => {
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
          type='button'
          onClick={e => nav('/reg')}
        >도서등록</button>
      </div>
    </div>
  )
}

export default BookList