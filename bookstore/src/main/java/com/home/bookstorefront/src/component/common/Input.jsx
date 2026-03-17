import React from 'react'
import styles from './Input.module.css'

const Input = ({
  type = 'txet',
  size = 'short',
  ...props
}) => {
  return (
    <input
      className={`
        ${styles.input}
        ${styles[size]}
      `}
      /* default = text 타입 */
      type={type}
      {...props}
    />
  )
}

export default Input