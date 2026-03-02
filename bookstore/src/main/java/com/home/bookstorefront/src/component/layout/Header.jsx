import React from 'react'
import styles from './Header.module.css'
import '../../reset.css'
import { Link, useNavigate } from 'react-router-dom'

/* 페이지 헤드라인 */
const Header = () => {
  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <div 
        className={styles.header_logo}
        onClick={e => nav('/moonlit-shelf')}
      >
        <img src="bookstore_logo_moon.png"/>
        <span>Moonlit Shelf</span>
        <span>달빛서가</span>
      </div>
      <div className={styles.menu}>
        <ul>
          <Link to='/moonlit-shelf/login'>
            <li style={{color : 'white'}}>Login</li>
          </Link>
          <li>Cart</li>
          <li>Join</li>
        </ul>
      </div>
    </div>
  )
}

export default Header