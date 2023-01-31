import React, { FC } from 'react'
import { useAppSelector } from '../redux/hooks'

const Info: FC = () => {

  const total = useAppSelector(state => state.deposit.value)

  return (
    <div className='info'>
      <div>
        Внесенные деньги: {total}
      </div>
    </div>
  )
}

export default Info