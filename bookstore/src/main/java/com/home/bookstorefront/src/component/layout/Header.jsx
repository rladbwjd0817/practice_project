import React from 'react'
import styles from './Header.module.css'
import '../../reset.css'

/* 페이지 헤드라인 */
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <li>Login</li>
          <li>장바구니</li>
          <li>Join</li>
        </ul>
      </div>
      <div className={styles.img_div}>
        <img src="bookstore_banner.png"/>
      </div>
    </div>
  )
}

export default Header