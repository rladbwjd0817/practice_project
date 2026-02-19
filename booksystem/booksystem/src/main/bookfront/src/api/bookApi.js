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
export const goRegData = async (regForm) => {
  try{
    const fileConfig = {
      headers : {'Content-Type' : 'multipart/form-data'}
    }

    const response = axios.post('http://localhost:8080/books', regForm, fileConfig)
    alert('도서가 등록되었습니다.')
  }catch(e){
    console.log('등록 중 오류 발생', e)
  }
}

/* 도서 상세 조회 api */
export const goDetail = async (bookNum) => {
  try{
    const response = await axios.get(`http://localhost:8080/books/${bookNum}`);
    return response;
  }catch(e){
    console.log('상세조회 중 api 오류 발생', e);
    alert('상세 조회 중 오류 발생!!');
  }
}

/* 도서 수정 api */
export const putData = async (bookNum, updateData) => {
  try{
    const response = await axios.put(`http://localhost:8080/books/${bookNum}/update`, updateData);
    return response;
  }catch(e){
    console.log('수정 중 api 오류 발생', e)
  }
}

// 도서 삭제 api
export const goDelete = async (bookNum) => {
  try{
    const response = await axios.delete(`http://localhost:8080/books/${bookNum}`);
    return response;
  }catch(e){
    console.log('삭제 중 api 오류 발생', e);
  }
}

/* 검색 api */
export const goSearch = async (keyword) => {
  try{
    const response = await axios.get('http://localhost:8080/books/search', {params: {keyword : keyword}});
    return response;
  }catch(e){
    console.log('검색 중 오류 발생', e);
  }
}