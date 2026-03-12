import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeImg_div}>
        {/* 이미지 */}
        <img src="morning2.png"/>
      </div>
      <div>{/* 차량 소개말 */}</div>
      <div>
        <div>견적 내기</div>
        <div>시승 신청</div>
        <div>판매 네트워크</div>
        <div>이 달의 구매 혜택</div>
      </div>
      
    </div>
  )
}

export default Home