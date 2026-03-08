import React from 'react'
import styles from './Footer.module.css'
import { FaRegCopyright } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const nav = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.footer_logo}>
        <img src="carshop_logo2.png" />
        <p>VELORA</p>
      </div>
      <div className={styles.footer_info}>
        <div className={styles.footer_info_menu}>
          <p>저작권 안내</p>
          <PiLineVertical className={styles.footer_info_icons}/>
          <p>개인 정보 처리 방침</p>
          <PiLineVertical className={styles.footer_info_icons}/>
          <p>이용약관</p>
          <PiLineVertical className={styles.footer_info_icons}/>
          <p>프라이버시 센터</p>
        </div>
        <p>고객 센터 : 080-1715-7574</p>
        <div className={styles.footer_copyright}>
          <p>COPYRIGHT</p>
          <FaRegCopyright style={{marginTop : '5px'}}/>
          <p>VELORA COMPANY. ALL RIGTHS RESERVED</p>
        </div>
      </div>
      <div className={styles.footer_sns_icons}>
        <FaYoutube 
          className={styles.sns_icons} 
          onClick={e => window.open('https://www.youtube.com/@KiaKorea')}
        />
        <FaInstagram 
          className={styles.sns_icons} 
          onClick={e => window.open('https://www.instagram.com/kia.kor/')}
        />
        <FaFacebook 
          className={styles.sns_icons}
          onClick={e => window.open('https://www.facebook.com/')}
        />
        <FaXTwitter 
          className={styles.sns_icons}
          onClick={e => window.open('https://x.com/')} 
        />
      </div>
    </div>
  )
}

export default Footer