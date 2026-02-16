import React from 'react'

const Input = ({
  type = 'text',
  ...props
}) => {
  return (
    <div>
      <input 
        type={type}
        {...props}
      />
    </div>
  )
}

export default Input