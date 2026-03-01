import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

/* 회원들이 보는 페이지 레이아웃 - 2분할 */
const MainLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout