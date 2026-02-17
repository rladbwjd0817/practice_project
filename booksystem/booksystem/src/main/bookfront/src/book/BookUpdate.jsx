import React, { useState } from 'react'
import Input from '../component/Input'
import { useNavigate, useParams } from 'react-router-dom'
import { putData } from '../api/bookApi';

const BookUpdate = () => {
  const {bookNum} = useParams();

  const nav = useNavigate();

  /* input에 입력할 데이터 저장할 state 변수 */
  const [updateData, setUpdateData] = useState({
    bookTitle : '',
    author : '',
    publisher : '',
    bookPrice : '',
    bookStock : '',
    bookIntro : ''
  });

  /* 입력받은 데이터 저장할 함수 */
  const handleUpdateData = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name] : e.target.value
    })
  }

  /* 수정버튼 클릭 시 수정 실행하는 함수 */
  const goUpdate = async () => {
    const response = await putData(bookNum, updateData);
    nav(`/detail/${bookNum}`)
  }

  console.log('bookNum: ', bookNum);
  console.log('updateData: ', updateData);


  return (
    <div>
      <div>
        <h2>도서 수정</h2>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>도서명</td>
              <td>
                <Input 
                  name= 'bookTitle'
                  value= {updateData.bookTitle}
                  onChange={e => handleUpdateData(e)}
                />
              </td>
            </tr>
            <tr>
              <td>저자</td>
              <td>
                <Input 
                  name= 'author'
                  value= {updateData.author}
                  onChange={e => handleUpdateData(e)}
                />
              </td>
            </tr>
            <tr>
              <td>출판사</td>
              <td>
                <Input 
                  name= 'publisher'
                  value= {updateData.publisher}
                  onChange={e => handleUpdateData(e)}
                />
              </td>
            </tr>
            <tr>
              <td>가격</td>
              <td>
                <Input 
                  type='number' 
                  name= 'bookPrice'
                  value= {updateData.bookPrice}
                  onChange={e => handleUpdateData(e)}
                />
              </td>
            </tr>
            <tr>
              <td>재고수량</td>
              <td>
                <Input 
                  type='number' 
                  name= 'bookStock'
                  value= {updateData.bookStock}
                  onChange={e => handleUpdateData(e)}
                />
              </td>
            </tr>
            <tr>
              <td>도서소개</td>
              <td>
                <textarea
                  name= 'bookIntro'
                  value= {updateData.bookIntro}
                  onChange={e => handleUpdateData(e)}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button 
          type='button'
          onClick={e => {nav('/')}}
        >목록가기</button>
        <button 
          type='button'
          onClick={e => {goUpdate()}}
        >수정완료</button>
      </div>
    </div>
  )
}

export default BookUpdate