import axios from "axios"

// 신차 등록 api
export const postNewCar = async (regCar) => {
  try{
    const response = await axios.post('http://localhost:8080/carshop', regCar)
    return response
  }catch(e){
    console.log('차량등록 api 실행 중 오류 발생', e)
  }
} 