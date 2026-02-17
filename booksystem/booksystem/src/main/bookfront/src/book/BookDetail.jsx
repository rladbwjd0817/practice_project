import React, { useEffect, useState } from 'react'
import { goDetail } from '../api/bookApi';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetail = () => {
  const {bookNum} = useParams();

  const nav = useNavigate();

  /* 선택 도서 조회 데이터 저장할 state 변수 */
   const [detailData, setDetailData] = useState({});

   
   /* 마운트 되면 바로 화면에 출력 */
   useEffect(() => {getDetail()}, []);
   
   /* 상세조회 함수 실행 */
   const getDetail = async () => {
     const response = await goDetail(bookNum);
     setDetailData(response.data)
    }
    
    console.log(detailData);

   /* JSON으로 자바에 받을때 bookNum을 문자열로 받기 */
   /* JSON.stringify('bookNum'); */




  return (
    <div>
      <div>
        <h2>도서 상세 화면</h2>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>등록일</td>
              <td>{detailData.regDate}</td>
              <td>도서명</td>
              <td>{detailData.bookTitle}</td>
            </tr>
            <tr>
              <td>저자</td>
              <td>{detailData.author}</td>
              <td>출판사</td>
              <td>{detailData.publisher}</td>
            </tr>
            <tr>
              <td>가격</td>
              <td>{detailData.bookPrice}</td>
              <td>재고수량</td>
              <td>{detailData.bookStock}</td>
            </tr>
            <tr>
              <td>도서소개</td>
              <td colSpan={3}>{detailData.bookIntro}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button 
          type='button'
          onClick={e => nav('/')}
        >목록가기</button>
        <button 
          type='button'
          onClick={e => {nav(`/detail/${bookNum}/update`)}}
        >수정</button>
        <button type='button'>삭제</button>
      </div>
    </div>
  )
}

export default BookDetail