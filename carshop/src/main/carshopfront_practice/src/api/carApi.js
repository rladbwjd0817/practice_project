import axios from "axios"

// 신차 등록 api
export const postNewCar = async (regCar) => {
  try{
    const response = await axios.post('http://localhost:8080/carshops', regCar)
    return response
  }catch(e){
    console.log('차량등록 api 실행 중 오류 발생', e)
  }
} 

/* 차량목록 조회 api */
export const selectCarList = async () => {
  try{
    const response = await axios.get('http://localhost:8080/carshops')
    return response
  }catch(e){
    console.log('차량 목록 조회 api 요청 중 오류 발생', e)
  }
}

// 구매자정보 등록 api
export const postSales = async (regSales) => {
  try{
    const response = await axios.post('http://localhost:8080/sales', regSales)
    return response;
  }catch(e){
    console.log('구매자 등록 axios 중 오류 발생',e)
  }
}

// 차량모델 조회 api
export const selectModelName = async () => {
  try{
    const response = await axios.get('http://localhost:8080/carshops/models');
    return response;
  }catch(e){
    console.log('차량모델 조회 중 오류 발생', e)
  }
}

/* 구매자 목록조회 api */
export const selectSalesList = async () => {
  try{

  }catch(e){
    console.log('구매자정보 리스트 조회 중 오류 발생', e)
  }
}