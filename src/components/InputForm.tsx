import React, { FC, useState } from 'react'
import { incDeposit } from '../redux/depositSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { incChange } from '../redux/moneyChangeSlice';
import { decMoney } from '../redux/moneySlice';
import { IMoney } from '../types/money';
import MyButton from './UI/Button/MyButton';

interface InputProps {
  isOpen: boolean;
  toggle: () => void;
}

const InputForm: FC<InputProps> = ({ isOpen, toggle }) => {
  const values = [50, 100, 500, 1000]
  const [value, setValue] = useState<keyof IMoney>('1')
  const dispatch = useAppDispatch()
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as keyof IMoney)
  }
  const onClikcHandler = () => {
    dispatch(incDeposit(+value))
    dispatch(decMoney({ value }))
    dispatch(incChange({ value }))
    toggle()
  }
  const money = useAppSelector(state => state.money)
  return (
    <div className='input-form'>
      <input disabled={!money[50]} type="radio" id='50' name='money' value='50' onChange={onChangeValue} />
      <label htmlFor='50'>50</label>
      <input disabled={!money[100]} type="radio" id='100' name='money' value='100' onChange={onChangeValue} />
      <label htmlFor='100'>100</label>
      <input disabled={!money[500]} type="radio" id='500' name='money' value='500' onChange={onChangeValue} />
      <label htmlFor='500'>500</label>
      <input disabled={!money[1000]} type="radio" id='1000' name='money' value='1000' onChange={onChangeValue} />
      <label htmlFor='1000'>1000</label>
      <MyButton onClick={onClikcHandler}>Внести</MyButton>
    </div>
  )
}

export default InputForm