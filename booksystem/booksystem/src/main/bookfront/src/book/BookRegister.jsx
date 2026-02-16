import React, { useState } from 'react'
import Input from '../component/Input'

const BookRegister = () => {
  /* input에 입력할 데이터를 저장할 state 변수 */
  const [regBook, setRegBook] = useState({
    bookTitle : '',
    author : '',
    publisher : '',
    bookPrice : '',
    booksStock : '',
    bookIntro : ''
  })

  console.log(regBook);

  /* 입력한 데이터 저장할 함수 */
  const newBookData = () => {
    setRegBook({
      ...regBook,
      [e.target.name] : e.target.value
    })
  }

  /* 등록버튼 클릭 시 등록 실행 할 함수 */
  const postRegData = () => {

  }


  return (
    <div>
      <div>
        <h2>도서 등록</h2>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>도서명</td>
              <td>
                <Input/>
              </td>
            </tr>
            <tr>
              <td>저자</td>
              <td>
                <Input/>
              </td>
            </tr>
            <tr>
              <td>출판사</td>
              <td>
                <Input/>
              </td>
            </tr>
            <tr>
              <td>가격</td>
              <td>
                <Input/>
              </td>
            </tr>
            <tr>
              <td>재고수량</td>
              <td>
                <Input/>
              </td>
            </tr>
            <tr>
              <td>도서소개</td>
              <td>
                <textarea />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>\
        <button
          type='button'
          onClick={e => {}}
        >등록</button>
      </div>
    </div>
  )
}

export default BookRegister