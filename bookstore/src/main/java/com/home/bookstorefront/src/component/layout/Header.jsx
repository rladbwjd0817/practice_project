import React from 'react'
import styles from './Header.module.css'
import '../../reset.css'
import { Link, useNavigate } from 'react-router-dom'

/* 페이지 헤드라인 */
const Header = () => {
  const nav = useNavigate();

  return (
    <div className={styles.container}>
      {/* header 로고 부분 - 로고 클릭 시 메인 홈으로 이동 */}
      <div 
        className={styles.header_logo}
        onClick={e => nav('/moonlit-shelf')}
      >
        <img src="/bookstore_logo_moon.png"/>
        <span>Moonlit Shelf</span>
        <span>달빛서가</span>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>Cart</li>
          <Link to='/moonlit-shelf/login'>
            <li style={{color : 'white'}}>Login</li>
          </Link>
          <li>Join</li>
        </ul>
      </div>
    </div>
  )
}

export default Header