import React from 'react'
import styles from './Landing.module.css'
import Button from '../../component/common/Button'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.homeImg_div}>
        {/* 이미지 */}
        <img src="/bookstore_banner.png"/>
      </div>
      
      <div className={styles.homeLogo}>
        <img src="/bookstore_logo_moon.png" />
      </div>

      <div className={styles.title_div}>
        <p>달빛서가</p>
      </div>

      <div className={styles.logo_letter}>
        <img src="/bookstore_logo_letter.png"/>
      </div>

      <div className={styles.btn_div}>
        {/* Shop Now 버튼 */}
        <Button 
          title='달빛 아래서 읽기'
          variant='gold'
          size='medium'
          onClick={e => nav('/moonlit-shelf')}
        />
      </div>
    </div>
  )
}

export default Landing