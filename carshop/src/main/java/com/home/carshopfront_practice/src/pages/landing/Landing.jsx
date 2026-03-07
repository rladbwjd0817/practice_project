import React from 'react'
import styles from './Landing.module.css'
import Button from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'


//////////* 접속 시 맨 처음 보여지는 화면 *//////////
const Landing = () => {
  const nav = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.landing_img}>
        {/* 랜딩 배경 이미지 */}
        <img src="carshop_landing.png" />
      </div>

      <div className={styles.logo_div}>
        {/* 로고이미지 */}
        <img src="carshop_logo2.png" />
        <p>VELORA</p>
      </div>  

      {/* 푸른 빛 div */}
      <div className={styles.glow_effect}></div>

      <div className={styles.landing_car}>
      {/* 자동차 이미지 */}
        <img src="landing_car2.png" />
      </div>

      {/* 메인홈페이지로 이동하는 버튼 */}
      <div className={styles.btn_div}>
        <Button 
          title='VELORA 둘러보기'
          variant='navy'
          size='big'
          onClick={e => nav('/velora')}
        />
      </div>
    </div>
  )
}

export default Landing