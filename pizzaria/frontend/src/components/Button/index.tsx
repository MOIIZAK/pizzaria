import { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children: ReactNode
  isLoginButton: boolean
}

export default function Button({
  children,
  isLoginButton,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={isLoginButton ? styles.button : styles.buttonAdd}
    >
      <a>{children}</a>
    </button>
  )
}
