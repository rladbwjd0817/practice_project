import React from 'react'
import styles from './Home.module.css'
import { TbReportMoney } from "react-icons/tb";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeImg_div}>
        {/* 이미지 */}
        <img src="morning2.png"/>
      </div>
      <div className={styles.homeImg_intro}>
        <p>Dreams Come True</p>
        <p>2025 All New Morning</p>
        <p>Drive With Me</p>
      </div>
      <div className={styles.quickMenu}>
        <div className={styles.quickMenu_content}>
          <TbReportMoney />
          <p>견적 내기</p>
        </div>
        <div className={styles.quickMenu_content}>
          <TbSteeringWheelFilled />
          <p>시승 신청</p>
        </div>
        <div className={styles.quickMenu_content}>
          <FaMapMarkedAlt />
          <p>판매 네트워크</p>
        </div>
        <div className={styles.quickMenu_content}>
          <FaGift />
          <p>이 달의 구매 혜택</p>
        </div>
      </div>
      
    </div>
  )
}

export default Home