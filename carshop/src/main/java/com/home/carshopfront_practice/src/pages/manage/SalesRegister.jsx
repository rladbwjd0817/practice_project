import React from 'react'
import styles from './SalesRegister.module.css'
import Select from '../../components/common/Select'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'

// 구매자 등록 페이지 //

const SalesRegister = () => {


  return (
    <div className={styles.container}>
      <h2>Sales Ragister</h2>
      <div>
        <div className={styles.regForm_title_div}>
          <div>Register New Car Model</div>
          <div className={styles.line_div}></div>
          <div className={styles.manufacturer_div}>
            <p>Manufacturer</p>
            {/* select 컴포넌트 */}
            <Select value='1'>
              {/* 일단 출력해보고 수정하기 -> value에 regCar에 저장된 제조사 값 꺼내서 넣기'{regCar.manu--}' */}
              {
                // regCar.map((car, index) => {
                //   return(
                //     <>
                //       <option key={index} value="1">선택</option>
                //       <option value={car.manufacturer}>기아</option>
                //       <option value={car.manufacturer}>현대</option>
                //       <option value={car.manufacturer}>쉐보레</option>
                //       <option value={car.manufacturer}>Benz</option>
                //       <option value={car.manufacturer}>BMW</option>
                //       <option value={car.manufacturer}>Audi</option>
                //       <option value={car.manufacturer}>Volvo</option>
                //     </>
                //   )
                // })
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
          <div className={styles.regBtn_div}>
            <Button 
              title='Register'
              variant='blue'
              size='small'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesRegister