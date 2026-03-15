import React from 'react'
import styles from './Home.module.css'
import { TbBackground, TbReportMoney } from "react-icons/tb";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import Button from '../../components/common/Button'
import { FaCheck } from "react-icons/fa6";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeImg_div}>
        {/* 이미지 */}
        <img src="morning2.png"/>
      </div>
      <div className={styles.homeImg_intro}>
        <p>Dreams Come True</p>
        <p>2026 All New Morning</p>
        <p>Drive With Me</p>
        <Button 
          title='차량 보러가기'
          className={styles.homeButton}
        />
      </div>
      <div className={styles.monthCar}>
        <div>
          <h2>Month of Velora</h2>
          <p>이달의 추천 차량</p>
        </div>
        <div className={styles.carIntro}>
          <img src="morning2.png"/>
          <div className={styles.carIntro_text}>
            <h3>
              2026 All new Morning
            </h3>
            <p>도심형 컴팩트카의 새로운 기준</p>
            <p>
              <FaCheck /> 
              <span> 뛰어난 연비</span>
            </p>
            <p>
              <FaCheck /> 
              <span> 스마트 드라이브 시스템</span>
            </p>
            <p>
              <FaCheck /> 
              <span> 도심형 컴팩트 디자인</span>
            </p>
            <Button 
              title='자세히 보기 >'
              variant='white'
              size='small'
            />
          </div>
        </div>
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
      <div className={styles.home_news}>
        <h2>Velora News</h2>
        <div className={styles.news_div}>
          <div className={styles.news_content}>
            <img src="morning2.png"/>
            <div className={styles.news_text}>
              <h3>Velora, 2026 모닝 출시</h3>
              <p>2026.03.15</p>
            </div>
          </div>
          <div className={styles.news_content}>
            <img src="전시장.png"/>
            <div className={styles.news_text}>
              <h3>신규 정시장 오픈</h3>
              <p>2026.03.10</p>
            </div>
          </div>
          <div className={styles.news_content}>
            <img src="구매혜택.png"/>
            <div className={styles.news_text}>
              <h3>3월 구매 혜택 안내</h3>
              <p>2026.03.01</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home