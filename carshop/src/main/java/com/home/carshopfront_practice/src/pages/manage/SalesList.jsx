import React, { useState } from 'react'
import styles from './SalesList.module.css' 

const SalesList = () => {
  // 구매자 목록조회 데이터 저장할 state 변수
  const [salesList, setSalesList] = useState([])

  return (
    <div className={styles.container}>
        <colgroup>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </colgroup>
        <table className={styles.salesTable}>
          <thead>
            <tr className={styles.thead_tr}>
              <td>No</td>
              <td>구매자명</td>
              <td>연락처</td>
              <td>구매일</td>
              <td>색상</td>
              <td>모델명</td>
              <td>가격</td>
            </tr>
          </thead>
          <tbody>
            {/* map돌리기 */}
            {
              salesList.map((sales,i) => {
                return(
                  <tr key={i}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default SalesList