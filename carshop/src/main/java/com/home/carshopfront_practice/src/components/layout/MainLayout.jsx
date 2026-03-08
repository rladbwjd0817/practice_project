import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.css'
import Header from './Header'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* 헤더부분 */}
        <Header/>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout