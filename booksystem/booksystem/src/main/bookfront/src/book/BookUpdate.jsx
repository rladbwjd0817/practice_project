import React, { useState } from 'react'
import Input from '../component/Input'
import { useNavigate } from 'react-router-dom'

const BookUpdate = () => {
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
  const handleUpdateData = () => {
    setUpdateData({
      ...updateData,
      [e.target.name] : e.target.value
    })
  }

  /* 수정버튼 클릭 시 수정 실행하는 함수 */
  const goUpdate = () => {
    
  }

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
                <Input />
              </td>
            </tr>
            <tr>
              <td>저자</td>
              <td>
                <Input />
              </td>
            </tr>
            <tr>
              <td>출판사</td>
              <td>
                <Input />
              </td>
            </tr>
            <tr>
              <td>가격</td>
              <td>
                <Input type='number' />
              </td>
            </tr>
            <tr>
              <td>재고수량</td>
              <td>
                <Input type='number' />
              </td>
            </tr>
            <tr>
              <td>도서소개</td>
              <td>
                <textarea></textarea>
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
          onClick={e => {}}
        >수정완료</button>
      </div>
    </div>
  )
}

export default BookUpdate