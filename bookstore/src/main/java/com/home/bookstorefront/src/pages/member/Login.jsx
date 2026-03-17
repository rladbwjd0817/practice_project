import React from 'react'
import Button from '../../component/common/Button'
import Input from '../../component/common/Input'
import styles from './Login.module.css'
import { LuMail } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { PiLineVerticalThin } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login_div}>
        <div className={styles.login_title}>
          {/* 타이틀 */}
          <p>로그인</p>
        </div>
        <div className={styles.divider}>
          <span>✦</span>
        </div>
        <div className={styles.id_div}>
          {/* 아이디 입력 input */}
          <p>아이디</p>
          <LuMail className={styles.id_icon}/>
          <Input 
            size='long'
            placeholder='아이디'
          />
        </div>
        <div className={styles.pw_div}>
          {/* 비밀번호 입력 input */}
          <p>비밀번호</p>
          <MdLockOutline className={styles.pw_icon}/>
          <Input 
            size='long'
            placeholder='비밀번호'
          />
        </div>
        <div className={styles.search_div}>
          {/* 아이디 찾기 / 비밀번호 찾기 */}
          <p>아이디 찾기</p>
          <PiLineVerticalThin style={{marginTop : '5px'}}/>
          <p>비밀번호 찾기</p>
        </div>
        <div>
          {/* 로그인 실행 할 버튼 */}
          <Button 
            className={styles.login_btn}
            title='로그인'
          />
        </div>
        <div className={styles.join_infor}>
          {/* 회원가입 페이지로 이동 */}
          <p>아직 회원이 아니신가요?</p>
          <div className={styles.goJoin}>
            <p>회원가입하기</p>
            <FaAngleRight className={styles.goJoin_icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login