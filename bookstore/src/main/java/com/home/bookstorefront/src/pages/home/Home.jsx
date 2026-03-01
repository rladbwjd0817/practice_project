import React from 'react'
import styles from './Home.module.css'
import Button from '../../component/common/Button'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeImg_div}>
        {/* 이미지 */}
        <img src="bookstore_banner.png"/>
      </div>
      
      {/* <div className={styles.homeLogo}>
        <img src="bookstore_logo.png" />
      </div> */}

      <div className={styles.title_div}>
        <p>Moonlit Shelf</p>
        <p>A quiet place to read before sleep</p>
      </div>
      <div className={styles.btn_div}>
        {/* Shop Now 버튼 */}
        <Button 
          title='Shop Now'
          variant='white'
          size='medium'
        />
      </div>
    </div>
  )
}

export default Home