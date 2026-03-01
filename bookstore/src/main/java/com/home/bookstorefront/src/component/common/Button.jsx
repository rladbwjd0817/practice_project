import React from 'react'
import styles from './Button.module.css'

const Button = ({
  title = '버튼',
  variant = 'gold',
  size = 'small',
  disabled = false,
  ...props
}) => {
  return (
    <button
      type='button'
      className={`
        ${styles.button}  
        ${styles[variant]}
        ${styles[size]}
        ${disabled ? styles.disabled : ''}
      `}
      disabled= {disabled}
      {...props}
    >
      {title}
    </button>
  )
}

export default Button