import React, { useEffect, useState } from 'react'
import styles from './SalesRegister.module.css'
import Select from '../../components/common/Select'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { postSales, selectModelName } from '../../api/carApi'
import { useNavigate } from 'react-router-dom'

// 구매자 등록 페이지 //

const SalesRegister = () => {
  const nav = useNavigate()

  /* 구매자 정보 저장할 state 변수 */
  const [regSales, setRegSales] = useState({
    salesName : '',
    salesColor : '',
    modelNum : '',
    salesTel : ''
  })

  /* 조회한 차량 모델리스트 데이터 저장할 state 변수 */
  const [selectModel, setSelectModel] = useState([])

  /* 유효성 검사결과 에러 메세지를 저장할 state변수 */
  const [errors, setErrors] = useState({
    salesName : '',
    salesColor : '',
    modelNum : '',
    salesTel : ''
  });

 // 입력한 구매자 정보 저장할 함수
  const handleRegSales = (e) => {
    /* 구조분해할당으로 input, Select에서 name, value 속성꺼내기 */
    const {name, value} = e.target

    setRegSales({
      ...regSales,
      [name] : value
    })

    /* 유효성검사 실행 */
    const erroMsg = validation(name, value);
    setErrors({
      ...errors,
      [name] : erroMsg
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
      modelNum : '',
      salesTel : ''
    })

    /* 판매목록 페이지로 이동 */
    nav('/velora/sales-list')
  }
  
  /* 유효성검사 실행 할 함수 생성*/
  const validation = (name, value) => {
    /* 에러메세지 저장할 변수 생성 */
    let erroMsg = ''

    /* 입력받은 name과 같은 name찾아가서 실행하기 */
    switch(name){
      case 'salesName' :
        if(value.length <= 1){
          erroMsg = '이름은 필수 입력입니다.'
        }
        else if(value.length > 30){
          erroMsg = '이름은 30글자를 초과하지 않습니다.'
        }
        break;
      case 'salesColor' :
        if(value === ''){
          erroMsg = '색상은 선택해야 합니다.'
        }
        break;
      case 'modelNum' :
        if(value === ''){
          erroMsg = '모델은 선택해야 합니다.'
        }
        break;
      case 'salesTel' :
        const telPattern = /^010-[0-9]{4}-[0-9]{4}$/;
        if(!telPattern.test(value)){
          erroMsg = '연락처 형식이 맞지 않습니다.'
        }
      }
      return erroMsg;
  }
  

  // 마운트 되었을 때 차량모델 조회 실행
  useEffect(() => {getModelName()}, [])

  return (
    <div className={styles.container}>
      <h2>Sales Register</h2>
        <div>
          <div 
            className={styles.salesRegForm_letter_div}
          >Sales Ragister</div>
          <div className={styles.line_div}></div>
          <div className={styles.salesName_div}>
            <p>구매자명</p>
            <Input 
              size='medium'
              placeholder= ' (필수) 구매자명을 입력하세요.'
              name= 'salesName'
              value={regSales.salesName}
              onChange={e => {handleRegSales(e)}}
            />
            {errors.salesName && <p className={styles.errorMsgs}>{errors.salesName}</p>}
          </div>
          <div className={styles.select_div}>
            <div className={styles.carColor_div}>
              <p>색상</p>
              {/* 조회한 색상 데이터 option에 넣어야 함! */}
              <Select 
                className={styles.carColor_select}
                name= 'salesColor'
                value={regSales.salesColor} 
                onChange={e => {handleRegSales(e)}}
              >
                <option value="">선택</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
              </Select>
              {errors.salesColor && <p className={styles.errorMsgs}>{errors.salesColor}</p>}
            </div>
            <div className={styles.carModel_div}>
              <p>모델</p>
              {/* 조회한 모델 데이터 option에 넣어야 함! */}
              <Select 
                className={styles.carModel_select}
                name= 'modelNum'
                value={regSales.modelNum} 
                onChange={e => {handleRegSales(e)}}
              >
                <option 
                  value="" 
                >선택</option>
                {
                  selectModel.map((model, i) => {
                    return(
                      <option 
                        key={model.modelNum} 
                        value={model.modelNum}
                      >{model.modelName}
                      </option>
                    )
                  })
                }
              </Select>
              {errors.modelNum && <p className={styles.errorMsgs}>{errors.modelNum}</p>}
            </div>
          </div>
          <div className={styles.salesRegTel_div}>
            <p>연락처</p>
            <Input 
              size='medium'
              placeholder=' (선택) 010-0000-0000.'
              name= 'salesTel'
              value={regSales.salesTel}
              onChange={e => {handleRegSales(e)}}
            />
            {errors.salesTel && <p className={styles.errorMsgs}>{errors.salesTel}</p>}
          </div>
          <div className={styles.regBtn_div}>
            <Button 
              title='Register'
              variant='blue'
              size='small'
              onClick={e => {insertRegSales()}}
              disabled={!regSales.salesName || !regSales.salesColor || !regSales.modelNum}
            />
          </div>
        </div>
    </div>
  )
}

export default SalesRegister