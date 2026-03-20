import React from 'react'
import styles from './Join.module.css'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import Select from '../../components/common/Select'


const Join = () => {
  return (
    <div className={styles.container}>
      <div className={styles.join_div}>
        <div>
          {/* 타이틀 */}
          <h2>Velora 계정 정보 입력</h2>
        </div>

       <div>
          <Input placeholder='이메일'/> {/* 이메일 */}
          <div>
            {/* 전화번호 */}
            <Select />
            <Input type='number' placeholder='전화번호'/>
            <Button title='인증요청'/>
          </div> 
          <Input type='password' placeholder='비밀번호'/> {/* 비밀번호 */}
          <Input type='password' placeholder='비밀번호 확인'/> {/* 비밀번호 확인 */}
       </div>

       <div>
        {/* 이름 */}
        <p>이름</p>
        <Input />
        <Input />
       </div>

       <div>
        {/* 생년월일 */}
        <Input type='date'/>
       </div>

       <div>
        {/* 성별 */}
        <Input type='radio' title='남성'/>
        <Input type='radio' title='여성'/>
       </div>

       <div>
        <p>Velora 계정은 서비스 제공을 위해 최소한의 개인정보를 수집 및 이용합니다.</p>
        <Button title='확인'/>
       </div>

       <div>
        {/* 로그인 화면으로 돌아가기 */}
        <p>로그인 화면으로 돌아가기</p>
       </div>

      </div>
    </div>
  )
}

export default Join