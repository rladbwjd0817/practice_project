import React from 'react'
import styles from './Login.module.css'
import { PiLineVerticalThin } from "react-icons/pi";
import Button from '../../components/common/Button'
import { LiaAngleRightSolid } from "react-icons/lia";
import Input from '../../components/common/Input';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.login_div}>
        <div className={styles.login_logo}>
          <img src="carshop_logo2.png" onClick={e => nav('/velora')}/>
        </div>
        <div>VELORA 계정으로 로그인</div>
        <div className={styles.loginEmail_div}>
          <Input 
            size='long'
            placeholder= '이메일'
          />
          <HiOutlineMail className={styles.loginEmail_icon}/>
        </div>
        <div className={styles.loginPw_div}>
          <Input 
            type='password'
            size='long'
            placeholder= '비밀번호'
          />
          <MdOutlineLock className={styles.loginPw_icon} />
        </div>
        <div className={styles.login_search}>
          <p>아이디찾기</p>
          <PiLineVerticalThin style={{marginTop : '5px'}}/>
          <p>비밀번호 재설정</p>
        </div>
        <div className={styles.loginBtn_div}>
          <Button 
            title='로그인'
            variant='gray'
            size='big'
          />
        </div>
        <div className={styles.line_div}></div>
        <div>
          <div className={styles.joinInfo_div}>
            <p>신규 계정 만들기는 글로벌 원아이디인 Velora 계정으로만 만들 수 있습니다.</p>
            <div className={styles.join_div}>
              <p>Velora 계정 만들기</p>
              <LiaAngleRightSolid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login