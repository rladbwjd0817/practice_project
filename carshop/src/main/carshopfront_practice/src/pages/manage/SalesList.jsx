import React, { useState } from 'react'
import styles from './SalesList.module.css' 

////// 구매자 목록조회 페이지 /////////

const SalesList = () => {
  // 구매자 목록조회 데이터 저장할 state 변수
  const [salesList, setSalesList] = useState([])

  return (
    <div className={styles.container}>
      <h2>Sales List</h2>
        <div className={styles.salesList_table_div}>
          <colgroup>
            <col width='7%'/>
            <col width='20%'/>
            <col width='20%'/>
            <col width='20%'/>
            <col width='10%'/>
            <col width='15%'/>
            <col width='*%'/>
          </colgroup>
          <table>
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
            <tbody className={styles.salesList_tbody}>
              {/* map돌리기 */}
              {
                salesList.map((sales,i) => {
                  return(
                    <tr key={i}>
                      <td>{salesList.length - i}</td>
                      <td>{sales.salesName}</td>
                      <td>{sales.salesTel}</td>
                      <td>{sales.salesColor}</td>
                      <td>{sales.salesDate}</td>
                      <td>{sales.modelName}</td>
                      <td>{sales.carPrice}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default SalesList