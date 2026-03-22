/* 회원 관련된 api 모음집 */

import axios from "axios"

/* 회원가입 등록 api */
export const insertMember = async (inputData) => {
  try{
    const response = await axios.post("http://localhost:8080/members", inputData);
    return response
  }catch(e){
    console.log("회원가입 등록 api 실행 중 오류 발생", e)
  }
}