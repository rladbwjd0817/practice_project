/* book api 모음집 */

import axios from "axios"

/* 도서목록조회 api */
export const goList = async () => {
  try{
    const response = await axios.get('http://localhost:8080/books');
    return response;
  }catch(e){
    alert('어이쿠! 도서 조회 중 오류가 발생했어요!!');
    console.log('도서 목록조회 api 중 오류 발생', e);
  }
}

/**
 * 도서 등록 api
 */
export const goRegData = async (regBook) => {
  try{
    const response = axios.post('http://localhost:8080/books', regBook)
    alert('도서가 등록되었습니다.')
  }catch(e){
    console.log('등록 중 오류 발생', e)
  }
}