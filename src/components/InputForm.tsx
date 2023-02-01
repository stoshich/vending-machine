import React, { FC, useState } from 'react'
import { incDeposit } from '../redux/depositSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { incChange } from '../redux/moneyChangeSlice';
import { decMoney } from '../redux/moneySlice';

interface InputProps {
  isOpen: boolean;
  toggle: () => void;
}

const InputForm: FC<InputProps> = ({ isOpen, toggle }) => {
  const values = [50, 100, 500, 1000]
  const [value, setValue] = useState(0)
  const dispatch = useAppDispatch()
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value)
  }
  const onClikcHandler = () => {
    dispatch(incDeposit(value))
    if (value === 50 || value === 100 || value === 500 || value === 1000) dispatch(decMoney({ value }))
    if (value === 50 || value === 100 || value === 500 || value === 1000) dispatch(incChange({ value }))
    toggle()
  }
  const money = useAppSelector(state => state.money)
  return (
    <div>
      <input disabled={!money[50]} type="radio" id='50' name='money' value='50' onChange={onChangeValue} />
      <label htmlFor='50'>50</label>
      <input disabled={!money[100]} type="radio" id='100' name='money' value='100' onChange={onChangeValue} />
      <label htmlFor='100'>100</label>
      <input disabled={!money[500]} type="radio" id='500' name='money' value='500' onChange={onChangeValue} />
      <label htmlFor='500'>500</label>
      <input disabled={!money[1000]} type="radio" id='1000' name='money' value='1000' onChange={onChangeValue} />
      <label htmlFor='1000'>1000</label>
      <button onClick={onClikcHandler}>Внести</button>
    </div>
  )
}

export default InputForm