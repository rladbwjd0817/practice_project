import React, { useState } from 'react'
import styles from './SalesRegister.module.css'
import Select from '../../components/common/Select'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'

// 구매자 등록 페이지 //

const SalesRegister = () => {
  /* 입력한 구매자 정보 저장할 state 변수 */
  const [Regsales, setRegSales] = useState({})

  /* 조회한 차량 모델, 색상 데이터 저장할 state 변수 */
  const [modelAndColor, setModelAndColor] = useState([])

  return (
    <div className={styles.container}>
      <h2>Sales Ragister</h2>
        <div>
          <div className={styles.salesRegForm_letter_div}>Sales Ragister</div>
          <div className={styles.line_div}></div>
          <div className={styles.salesName_div}>
            <p>구매자명</p>
            <Input 
              size='medium'
              value={Regsales.name}
              onChange={e => {}}
            />
          </div>
          <div className={styles.select_div}>
            <div className={styles.carColor_div}>
              <p>색상</p>
              {/* 조회한 색상 데이터 option에 넣어야 함! */}
              <Select value='1' className={styles.carColor_select}>
                
                {
                  modelAndColor.map((color, i) => {
                    return(
                      <>
                        <option     
                          value="1"
                          key={i}
                        >선택</option>
                        <option value="">{color}</option>
                        <option value="">{color}</option>
                        <option value="">{color}</option>
                      </>
                    )
                  })
                }
              </Select>
            </div>
            <div className={styles.carModel_div}>
              <p>모델</p>
              {/* 조회한 모델 데이터 option에 넣어야 함! */}
              <Select value='' className={styles.carModel_select}>
                {
                  modelAndColor.map((model, i) => {
                    return(
                      <>
                        <option 
                          value=""
                          key={i}
                        >선택</option>
                        <option value="">{model}</option>
                        <option value="">{model}</option>
                        <option value="">{model}</option>
                        <option value="">{model}</option>
                        <option value="">{model}</option>
                        <option value="">{model}</option>
                      </>
                    )
                  })
                }
              </Select>
            </div>
          </div>
          <div className={styles.salesRegTel_div}>
            <p>연락처</p>
            <Input 
              size='medium'
              value={Regsales.tel}
              onChange={e => {}}
            />
          </div>
          <div className={styles.regBtn_div}>
            <Button 
              title='Register'
              variant='blue'
              size='small'
              onClick={e => {}}
            />
          </div>
        </div>
    </div>
  )
}

export default SalesRegister