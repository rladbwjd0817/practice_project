import React from 'react'
import Button from '../../component/common/Button'
import Input from '../../component/common/Input'

const Login = () => {
  return (
    <div>
      <div>
        <Input 
          placeholder= 'id를 입력하세요.'
        />
      </div>
      <div>
        <Input 
          placeholder= 'password를 입력하세요.'
        />
      </div>
      <div>
        <Button 
          title='로그인'
        />
      </div>
    </div>
  )
}

export default Login