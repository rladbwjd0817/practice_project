import React, { useEffect, useState } from 'react'
import styles from './SalesRegister.module.css'
import Select from '../../components/common/Select'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { postSales, selectModelName } from '../../api/carApi'

// 구매자 등록 페이지 //

const SalesRegister = () => {
  /* 구매자 정보 저장할 state 변수 */
  const [regSales, setRegSales] = useState({
    salesName : '',
    salesColor : '',
    modelName : '',
    salesTel : ''
  })

  /* 조회한 차량 모델리스트 데이터 저장할 state 변수 */
  const [selectModel, setSelectModel] = useState([])

  // 입력한 구매자 정보 저장할 함수
  const handleRegSales = (e) => {
    setRegSales({
      ...regSales,
      [e.target.name] : e.target.value
    })
  }

  console.log('구매자 정보', regSales);

  // 차량모델 조회 실행 함수
  const getModelName = async () => {
    const response = await selectModelName();
    setSelectModel(response.data)
  }
  console.log('차량모델', selectModel)

  
  // 등록 버튼 클릭 시 등록 실행 할 함수
  const insertRegSales = async () => {
    const response = await postSales(regSales);
    setRegSales(response.data);
    setRegSales({
      salesName : '',
      salesColor : '',
      modelName : '',
      salesTel : ''
    })
  }

  // 마운트 되었을 때 차량모델 조회 실행
  useEffect(() => {getModelName()}, [])


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
              name= 'salesName'
              value={regSales.salesName}
              onChange={e => {handleRegSales(e)}}
            />
          </div>
          <div className={styles.select_div}>
            <div className={styles.carColor_div}>
              <p>색상</p>
              {/* 조회한 색상 데이터 option에 넣어야 함! */}
              <Select value={regSales.salesColor} 
                className={styles.carColor_select}
                name= 'salesColor'
                onChange={e => {handleRegSales(e)}}
              >
                <option value="">선택</option>
                <option value="White">White</option>
                <option value="">Black</option>
                <option value="">Red</option>
              </Select>
            </div>
            <div className={styles.carModel_div}>
              <p>모델</p>
              {/* 조회한 모델 데이터 option에 넣어야 함! */}
              <Select 
                value={regSales.modelName} 
                name= 'modelName'
                className={styles.carModel_select}
                onChange={e => {handleRegSales(e)}}
              >
                <option 
                  value="" 
                >선택</option>
                {
                  selectModel.map((model, i) => {
                    return(
                      <>
                        <option 
                          key='i' 
                          value=""
                        >{model}</option>
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
              name= 'salesTel'
              value={regSales.salesTel}
              onChange={e => {handleRegSales(e)}}
            />
          </div>
          <div className={styles.regBtn_div}>
            <Button 
              title='Register'
              variant='blue'
              size='small'
              onChange={e => {handleRegSales(e)}}
            />
          </div>
        </div>
    </div>
  )
}

export default SalesRegister