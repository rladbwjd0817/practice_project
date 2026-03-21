import React, { useState } from 'react'
import styles from './Join.module.css'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import Select from '../../components/common/Select'
import { PiWarningCircleLight } from "react-icons/pi";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";


const Join = () => {

  /* 비밀번호 보이기 / 숨김 저장할 state변수 */
  const [showPw, setShowPw] = useState(false);

  /* 비밀번호 확인 보이기/숨김 데이터 저장할 state 변수 */
  const [showPwConfirm , setShowPwConfirm] = useState(false);

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
            <Input placeholder='이메일'/>
          </div>

          <div className={styles.tel_div}>
            {/* 전화번호 */}
            <span className={styles.asterisk}>*</span>
            <Select />
            <span className={styles.asterisk}>*</span>
            <Input type='number' placeholder='전화번호'/>
            <Button title='인증요청'/>
          </div> 

          <div className={styles.pw_div}>
            <span className={styles.asterisk}>*</span>
            <Input 
              type={showPw ? 'text' : 'password'}
              placeholder='비밀번호'
            />
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
            />
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
        <Input className={styles.name_input}placeholder='성'/>
        <span className={styles.asterisk}>*</span>
        <Input placeholder='이름'/>
       </div>

       <div className={styles.birth_div}>
        {/* 생년월일 */}
        <span className={styles.asterisk}>*</span>
        <p>생년월일</p>
        <Input 
          type='date'
          className={styles.birth_input}
        />
       </div>

       <div className={styles.gender_div}>
        {/* 성별 */}
        <span className={styles.asterisk}>*</span>
        <p>성별</p>
        <div>
          <input 
            type='radio' 
            name='gender'
          /> 남성
          <input 
            type='radio'
            name='gender'
          /> 여성
        </div>
       </div>

       <div className={styles.notice_div}>
        <PiWarningCircleLight style={{marginTop : '2'}}/>
        <p style={{whiteSpace: 'pre-line'}}>
          {`Velora 계정은 서비스 제공을 위해 최소한의 개인정보를 수집 및 이용합니다.`}
        </p>
       </div>

       <div className={styles.btn}>
        <Button title='확인'/>
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