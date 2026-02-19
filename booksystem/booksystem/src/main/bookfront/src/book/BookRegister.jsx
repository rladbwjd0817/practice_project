import React, { useState } from 'react'
import Input from '../component/Input'
import { goRegData } from '../api/bookApi';
import { useNavigate } from 'react-router-dom';

const BookRegister = () => {
  const nav = useNavigate()

  /* input에 입력할 데이터를 저장할 state 변수 */
  const [regBook, setRegBook] = useState({
    bookTitle : '',
    author : '',
    publisher : '',
    bookPrice : '',
    bookStock : '',
    bookIntro : ''
  })

  console.log(regBook);

  /* input 태그에 선택한 파일을 state 변수에 저장 -> 파일 통째로 저장*/
  const [fileData, setFileData] = useState(null);

  /* 도서 정보(문자, 숫자) + 파일정보 모두를 담을 수 있는 FormData() 객체  생성 */
  const regForm = new FormData();

  /* FormData()객체에 내용 저장할 함수 */
  const postRegBook = async () => {
    regForm.append('bookTitle', regBook.bookTitle)
    regForm.append('author', regBook.author)
    regForm.append('publisher', regBook.publisher)
    regForm.append('bookPrice', regBook.bookPrice)
    regForm.append('bookStock', regBook.bookStock)
    regForm.append('bookIntro', regBook.bookIntro)

    regForm.append('file', fileData);

    const response = await goRegData(regForm);
  }
  console.log('fileData - ', fileData);

  /* 입력한 데이터 저장할 함수 */
  const newBookData = (e) => {
    setRegBook({
      ...regBook,
      [e.target.name] : e.target.value
    })
  }

  /* 등록버튼 클릭 시 등록 실행 할 함수 */
  const postRegData = async () => {
    const response = await goRegData(regBook);
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
                <Input 
                  type='text'
                  name='bookTitle'
                  value={regBook.bookTitle}
                  onChange={e=>{newBookData(e)}}
                />
              </td>
            </tr>
            <tr>
              <td>저자</td>
              <td>
                <Input 
                  type='text'
                  name='author'
                  value={regBook.author}
                  onChange={e=>{newBookData(e)}}
                />
              </td>
            </tr>
            <tr>
              <td>출판사</td>
              <td>
                <Input 
                  type='text'
                  name='publisher'
                  value={regBook.publisher}
                  onChange={e=>{newBookData(e)}}
                />
              </td>
            </tr>
            <tr>
              <td>가격</td>
              <td>
                <Input 
                  type='text'
                  name='bookPrice'
                  value={regBook.bookPrice}
                  onChange={e=>{newBookData(e)}}
                />
              </td>
            </tr>
            <tr>
              <td>재고수량</td>
              <td>
                <Input 
                  type='text'
                  name='bookStock'
                  value={regBook.bookStock}
                  onChange={e=>{newBookData(e)}}
                />
              </td>
            </tr>
            <tr>
              <td>도서소개</td>
              <td>
                <textarea
                  name='bookIntro'
                  value={regBook.bookIntro}
                  onChange={e=>{newBookData(e)}}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {/* 단일 파일 업로드 */}
        <input 
          type="file" 
          onChange={e => {setFileData(e.target.files[0])}}
        />
      </div>
      <div>
        <button
          type='button'
          onClick={e => {
            postRegData()
            nav('/')
          }}
        >등록</button>
      </div>
    </div>
  )
}

export default BookRegister