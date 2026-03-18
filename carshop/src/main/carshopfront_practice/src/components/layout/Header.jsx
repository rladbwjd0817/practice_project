import React from 'react'
import styles from './Header.module.css'
import '../../reset.css'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
  const nav = useNavigate()

  return (
    <div className={styles.container}>

      <div className={styles.header_logo}>
        {/* 로고 & name */}
        <div>
          <img src="/carshop_logo2.png"
            onClick={e => nav('/')}
          />
        </div>
        <div>
          <p onClick={e => nav('/velora')}>VELORA</p>
        </div>
      </div>
      <div className={styles.header_menu}>
        {/* 메뉴들 */}
        <ul>
          <Link to={'/velora/newModel'}><li>New Model</li></Link>
          <Link to={'/velora/sales-register'}><li>Sales Register</li></Link>
          {/* Cart는 로그인되면 My page로 바뀌기 */}
          <Link to={'/velora/sales-list'}><li>Sales List</li></Link>
          <Link to={'/velora-login'}>
            <li>Login</li>
          </Link>
          <Link to={'/velora-join'}>
            <li>Join</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header