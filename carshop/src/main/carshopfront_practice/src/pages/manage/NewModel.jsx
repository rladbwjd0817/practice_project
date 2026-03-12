import React, { useEffect, useState } from 'react'
import styles from './NewModel.module.css'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import { postNewCar, selectCarList } from '../../api/carApi';

//////////////////차량등록 & 등록된 차량 조회 페이지///////////////////////

const NewModel = () => {
  /* input에 입력된 차량 데이터 저장하는 state 변수 */
  const [regCar, setRegCar] = useState({
    manufacturer : '',
    modelName : '',
    carPrice : ''
  })

  /* 조회된 차량정보 저장한 state 변수 */
  const [carList, setCarList] = useState([])

  // input에 입력된 차량 데이터 저장하는 변수
  const handleRegCar = (e) => {
    setRegCar({
    ...regCar,
    [e.target.name] : e.target.value
  })
  }
  console.log('신차 -', regCar)

  // 등록 버튼 누르면 신차 등록 실행 함수
  const insertNewCar = async () => {
    const response = await postNewCar(regCar);
    console.log(response.data)
    alert('차량 등록이 되었습니다!');
    setRegCar({
      manufacturer : '',
      modelName : '',
      carPrice : ''
    })
    await getCarList();
  } 

   /* 조회 실행하는 함수 */
   const getCarList = async () => {
    const response = await selectCarList();
    setCarList(response.data);
   }
   console.log('차량 리스트', carList);

   /* 차량조회는 마운트시, carList값이 변경되면 바로 조회 */
   useEffect(() => {getCarList()}, [])

  return (
    <div className={styles.container}>
      <h2>Register New Model</h2>
      <div className={styles.regForm_title_div}>
        <div>Register New Car Model</div>
        <div className={styles.line_div}></div>
        <div className={styles.manufacturer_div}>
          <p>Manufacturer</p>
          {/* select 컴포넌트 */}
          <Select 
            name='manufacturer' 
            value={regCar.manufacturer}
            onChange={e => {handleRegCar(e)}}
          >
            <option 
              value=""
              name='선택'
            >선택</option>
            <option 
              value='기아'
              name='기아'
              onChange={e => {handleRegCar(e)}}
            >기아</option>
            <option 
              value='현대'
              name='현대'
              onChange={e => {handleRegCar(e)}}
            >현대</option>
          </Select>
        </div>
        <div className={styles.carName_div}>
          <p>Car Name</p>
          <Input 
            size='long'
            placeholder= '모델명을 입력하세요.'
            name='modelName'
            value={regCar.modelName}
            onChange={e => {handleRegCar(e)}}
          />
        </div>
        <div className={styles.price_div}>
          <p>Price</p>
          <Input 
            type='number'
            size='long'
            placeholder= '가격을 입력하세요.'
            name='carPrice'
            value={regCar.carPrice}
            onChange={e => {handleRegCar(e)}}
          />
        </div>
        <div className={styles.regBtn_div}>
          <Button 
            title='Register'
            variant='blue'
            size='small'
            disabled={!regCar.manufacturer || !regCar.modelName || !regCar.carPrice}
            onClick={e => {insertNewCar()}}
          />
        </div>
      </div>
      <div className={styles.regCarList_div}>
        <h2>Registered Car Models</h2>
        <div>
          <table>
              <colgroup>
                <col width='5%'/>
                <col width='15%'/>
                <col width='20%'/>
                <col width='*'/>
                <col width='20%'/>
              </colgroup>
            <thead className={styles.newModel_thead}>
              <tr>
                <td>No</td>
                <td>모델 번호</td>
                <td>모델명</td>
                <td>가격</td>
                <td>제조사</td>
              </tr>
            </thead>
            <tbody className={styles.newModel_tbody}>
              {/* map으로 돌려서 등록차량 조회하기 */}
              {
                carList.map((car, i) => {
                  return (
                    <tr key={i}>
                      <td>{carList.length - i}</td>
                      <td>{car.modelNum}</td>
                      <td>{car.modelName}</td>
                      <td>{car.carPrice.toLocaleString()}원</td>
                      <td>{car.manufacturer}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NewModel