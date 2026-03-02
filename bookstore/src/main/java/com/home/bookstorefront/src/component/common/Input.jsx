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
      type={type}
      {...props}
    />
  )
}

export default Input