import React, { FC } from 'react'
import classes from './MyButton.module.css'

interface MyButtonProps {
  children: React.ReactNode;
  onClick?: () => void
}

const MyButton: FC<MyButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.myBtn}>{children}</button>
  )
}

export default MyButton