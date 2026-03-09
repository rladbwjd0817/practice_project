import React, { useState } from 'react'
import styles from './NewModel.module.css'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';

//////////////////차량등록 & 등록된 차량 조회 페이지///////////////////////

const NewModel = () => {
  /* 등록된 차량 저장하는 state 변수 */
  const [regCar, setRegCar] = useState([])

  return (
    <div className={styles.container}>
      <h2>Register New Model</h2>
      <div className={styles.regForm_title_div}>
        <div>Register New Car Model</div>
        <div className={styles.line_div}></div>
        <div className={styles.manufacturer_div}>
          <p>Manufacturer</p>
          {/* select 컴포넌트 */}
          <Select value='1'>
            {/* 일단 출력해보고 수정하기 -> value에 regCar에 저장된 제조사 값 꺼내서 넣기'{regCar.manu--}' */}
            {
              regCar.map((car, index) => {
                return(
                  <>
                    <option key={index} value="1">선택</option>
                    <option value={car.manufacturer}>기아</option>
                    <option value={car.manufacturer}>현대</option>
                    <option value={car.manufacturer}>쉐보레</option>
                    <option value={car.manufacturer}>Benz</option>
                    <option value={car.manufacturer}>BMW</option>
                    <option value={car.manufacturer}>Audi</option>
                    <option value={car.manufacturer}>Volvo</option>
                  </>
                )
              })
            }
            
          </Select>
        </div>
        <div className={styles.carName_div}>
          <p>Car Name</p>
          <Input 
            size='long'
            placeholder= '모델명을 입력하세요.'
          />
        </div>
        <div className={styles.price_div}>
          <p>Price</p>
          <Input 
            type='number'
            size='long'
            placeholder= '가격을 입력하세요.'
          />
        </div>
        <div className={styles.carImg_div}>
          <p>Car Image</p>
          <Input 
            type='file'
            size='long'
          />
        </div>
        <div className={styles.regBtn_div}>
          <Button 
            title='Register'
            variant='blue'
            size='small'
          />
        </div>
      </div>
      <div className={styles.regCarList_div}>
        <h2>Registered Car Models</h2>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>모델 번호</td>
              <td>모델명</td>
              <td>제조사</td>
            </tr>
          </thead>
          <tbody>
            {/* map으로 돌려서 등록차량 조회하기 */}
            {
              regCar.map((car, i) => {
                return (
                  <tr key={i}>
                    <td>{regCar.length - i}</td>
                    <td>{car.modelName}</td>
                    <td>{car.carPrice}</td>
                    <td>{car.manufacturer}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NewModel