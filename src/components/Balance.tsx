import React, { FC } from 'react'
import { useAppSelector } from '../redux/hooks'



const Balance: FC = () => {
  const balance = useAppSelector(state => state.money)
  let total = 0
  let key: keyof typeof balance

  for (key in balance) {
    if (balance[key]) total += +key * +balance[key]
  }
  return (
    <div className='info'>Баланс: {total}</div>
  )
}

export default Balance