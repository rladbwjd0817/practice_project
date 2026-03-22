import React, { useState } from 'react'
import styles from './Join.module.css'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import Select from '../../components/common/Select'
import { PiWarningCircleLight } from "react-icons/pi";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { insertMember } from '../../api/memberApi'
import { TbFlagSearch } from 'react-icons/tb'


const Join = () => {
  /* 페이지 이동 */
  const nav = useNavigate()
  
  /* input 데이터를 저장한 state 변수 */
  const [inputData, setInputData] = useState({
    email : '',
    phone : '',
    password : '',
    lastName : '',
    firstName : '',
    birthDate : '',
    gender : '',
    countryCode : '+82'
  })

  /* 비밀번호 보이기 / 숨김 저장할 state변수 */
  const [showPw, setShowPw] = useState(false);

  /* 비밀번호 확인 보이기/숨김 데이터 저장할 state 변수 */
  const [showPwConfirm , setShowPwConfirm] = useState(false);

  /* 에러 메시지 담을 state 변수 */
  const [errors, setErrors] = useState({
    email : '',
    phone : '',
    password : '',
    lastName : '',
    firstName : '',
    birthDate : '',
    gender : '',
    countryCode : ''
  })

  /* 세계 지역번호 저장되어 있는 변수 */
  const countryCodes = [
    { country: '🇰🇷 대한민국', code: '+82' },
    { country: '🇯🇵 일본', code: '+81' },
    { country: '🇺🇸 미국', code: '+1' },
    { country: '🇬🇧 영국', code: '+44' },
    { country: '🇮🇹 이탈리아', code: '+39' }
  ]

  /* 비밀번호 확인 데이터 담을 state 변수 */
  const [passwordConfirm, setPasswordConfirm] = useState('');

  /* 입력받은 데이터를 저장할 함수 */
  const handleInputData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name] : e.target.value
    })
  }

  /* 유효성 검사 실행 함수 */
  const validateInputData = () => {
    let isValid = true;
    /* 에러메세지 저장할 변수 생성 */
    const newErrors = {
      email : '',
      phone : '',
      password : '',
      lastName : '',
      firstName : '',
      birthDate : '',
      gender : '',
      countryCode : ''
    }

    /* 유효성검사 실행 */

    /* 1. 이메일 유효성 검사 */
    if(!inputData.email){
      newErrors.email = '이메일을 입력해주세요.'
      isValid = false
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputData.email)){
      newErrors.email = '이메일 형식이 올바르지 않습니다.'
      isValid = false
    }

    /* 2. 전화번호 유효성 검사 */
    if(!inputData.phone){
      newErrors.phone = '전화번호를 입력해주세요.'
      isValid = false
    } else if(!/^010-[0-9]{4}-[0-9]{4}$/.test(inputData.phone)){
      newErrors.phone = '전화번호 형식이 올바르지 않습니다.'
      isValid = false
    }

    /* 3. 비밀번호 유효성 검사 */
    if(!inputData.password){
      newErrors.password = '비밀번호를 입력해주세요.'
      isValid = false
    } else if(inputData.password.length < 8){
      newErrors.password = '비밀번호는 8자리 이상 입력해주세요.'
      isValid = false
    }

    /* 4. 비밀번호 확인 유효성 검사 */
    if(!passwordConfirm){
      newErrors.passwordConfirm = '비밀번호 확인을 입력해주세요.'
      isValid = false
    } else if(inputData.password !== passwordConfirm){
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.'
      isValid = false
    }

    /* 5. 성 */
    if(!inputData.firstName){
      newErrors.firstName = '성을 입력해주세요.'
      isValid = false
    }

    /* 6. 이름 */
    if(!inputData.lastName){
      newErrors.lastName = '이름을 입력해주세요.'
      isValid = false
    }

    /* 7. 생년월일 */
    if(!inputData.birthDate){
      newErrors.birthDate = '생년월일을 입력해주세요.'
      isValid = false
    }

    /* 8. 성별 */
    if(!inputData.gender){
      newErrors.gender = '성별을 선택해주세요.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
    
  }

  /* 회원가입 등록 실행 함수 */
  const putMember = async () => {
    if(!validateInputData()) return
    const response = await insertMember(inputData);
    if(response) nav('/velora')
  }
  console.log(inputData);

  return (
    <div className={styles.container}>
      <div className={styles.join_div}>
        <div className={styles.join_title}>
          {/* 타이틀 */}
          <h2>Velora 계정 정보 입력</h2>
        </div>

       <div className={styles.join_input_div}>
          <div>
            <span className={styles.asterisk}>*</span>
            <Input 
              placeholder='이메일'
              name= 'email'
              value= {inputData.email}
              onChange={e => handleInputData(e)}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.tel_div}>
            {/* 전화번호 */}
            <span className={styles.asterisk}>*</span>
            <Select
              className={styles.countryCodes}
              name= 'countryCode'
              value= {inputData.countryCode}
              onChange={e => handleInputData(e)}
            >
              {
                countryCodes.map((country, i) => {
                  return(
                    <option 
                      key={i} 
                      value={country.code}
                    >
                      {country.country} {country.code}
                    </option>
                  )
                })
              }
            </Select>
            <span className={styles.asterisk}>*</span>
            <Input 
              placeholder='전화번호'
              name= 'phone'
              value= {inputData.phone}
              onChange={e => handleInputData(e)}
            />
            <Button title='인증요청'/>
          </div> 
          <div>
            {/* 전화번호 유효성검사 오류 메세지 */}
            {errors.phone && <p className={styles.error} style={{marginBottom : '10px'}}>{errors.phone}</p>}
          </div>

          <div className={styles.pw_div}>
            <span className={styles.asterisk}>*</span>
            <Input 
              type={showPw ? 'text' : 'password'}
              placeholder='비밀번호'
              name= 'password'
              value= {inputData.password}
              onChange={e => handleInputData(e)}
            />
            {errors.password && <p className={styles.error} style={{marginBottom : '10px'}}>{errors.password}</p>}
            <button onClick={() => setShowPw(!showPw)}>
              {/* showPw가 true이면 !true => false, 
                showPw가 false이면 !false => true 값이 저장
              */}
              {showPw ? <AiOutlineEye /> : <AiOutlineEyeInvisible />  }
            </button>
          </div> 

          <div className={styles.pw_div}>
            <span className={styles.asterisk}>*</span>
            <Input 
              type={showPwConfirm ? 'text' : 'password'}
              placeholder='비밀번호 확인'
              name='passwordConfirm'
              value={passwordConfirm}
              onChange={e => setPasswordConfirm(e.target.value)}
            />
            {errors.passwordConfirm && <p className={styles.error}>{errors.passwordConfirm}</p>}
            <button onClick={() => setShowPwConfirm(!showPwConfirm)}>
              {/* showPw가 true이면 !true => false, 
                showPw가 false이면 !false => true 값이 저장
              */}
              {showPwConfirm ? <AiOutlineEye /> : <AiOutlineEyeInvisible />  }
            </button>
          </div> 
       </div>

       <div className={styles.name_div}>
        <p>이름</p>
        <span className={styles.asterisk}>*</span>
        <Input 
          className={styles.name_input}
          placeholder='성'
          name= 'firstName'
          value= {inputData.firstName}
          onChange={e => handleInputData(e)}
        />
        {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
        <span className={styles.asterisk}>*</span>
        <Input 
          placeholder='이름'
          name= 'lastName'
          value= {inputData.lastName}
          onChange={e => handleInputData(e)}
        />
        {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
       </div>

       <div className={styles.birth_div}>
        {/* 생년월일 */}
        <span className={styles.asterisk}>*</span>
        <p>생년월일</p>
        <Input 
          type='date'
          className={styles.birth_input}
          name= 'birthDate'
          value= {inputData.birthDate}
          onChange={e => handleInputData(e)}
        />
        {errors.birthDate && <p className={styles.error}>{errors.birthDate}</p>}
       </div>

       <div className={styles.gender_div}>
        {/* 성별 */}
        <span className={styles.asterisk}>*</span>
        <p>성별</p>
        <div>
          <input 
            type='radio' 
            name='gender'
            value='M'
            onChange={e => handleInputData(e)}
          /> 남성
          <input 
            type='radio'
            name='gender'
            value='F'
            onChange={e => handleInputData(e)}
          /> 여성
        </div>
          {errors.gender && <p className={styles.error}>{errors.gender}</p>}
       </div>

       <div className={styles.notice_div}>
        <PiWarningCircleLight style={{marginTop : '2'}}/>
        <p style={{whiteSpace: 'pre-line'}}>
          {`Velora 계정은 서비스 제공을 위해 최소한의 개인정보를 수집 및 이용합니다.`}
        </p>
       </div>

       <div className={styles.btn}>
        <Button 
          title='확인'
          onClick={e => {
            putMember()
            
          }}
        />
       </div>

       <div className={styles.back_login}>
        <HiOutlineChevronLeft className={styles.back_login_icon}/>
        <Link to={'/velora-login'}>
          <p style={{color : 'black', fontSize : '0.8rem'}}>로그인 화면으로 돌아가기</p>
        </Link>
       </div>

      </div>
    </div>
  )
}

export default Join