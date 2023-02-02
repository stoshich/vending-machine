import React, { FC } from 'react'
import { incAmount, pushProduct } from '../redux/cartSlice'
import { decDeposit } from '../redux/depositSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { decChange } from '../redux/moneyChangeSlice'
import { incMoney } from '../redux/moneySlice'
import { decAmount } from '../redux/productsSlice'
import { IProduct } from '../types/product'
import MyButton from './UI/Button/MyButton'


interface ControlProps {
  toggle: () => void
}

const ControlPanel: FC<ControlProps> = ({ toggle }) => {

  const cart = useAppSelector(state => state.cart)
  const products = useAppSelector(state => state.products)
  const change = useAppSelector(state => state.change)
  const deposit = useAppSelector(state => state.deposit.value)
  const dispatch = useAppDispatch()

  const onClickChange = () => {
    let tempDep = deposit
    let tempAmount = change[500]
    while (tempDep >= 500 && tempAmount > 0) {
      dispatch(decDeposit(500))
      dispatch(decChange({ value: '500' }))
      dispatch(incMoney({ value: '500' }))
      tempDep -= 500
      tempAmount -= 1
    }
    tempAmount = change[100]
    while (tempDep >= 100 && change[100] > 0) {
      dispatch(decDeposit(100))
      dispatch(decChange({ value: '100' }))
      dispatch(incMoney({ value: '100' }))
      tempDep -= 100
      tempAmount -= 1
    }
    tempAmount = change[50]
    while (tempDep >= 50 && change[50] > 0) {
      dispatch(decDeposit(50))
      dispatch(decChange({ value: '50' }))
      dispatch(incMoney({ value: '50' }))
      tempDep -= 50
      tempAmount -= 1
    }
    tempAmount = change[10]
    while (tempDep >= 10 && change[10] > 0) {
      dispatch(decDeposit(10))
      dispatch(decChange({ value: '10' }))
      dispatch(incMoney({ value: '10' }))
      tempDep -= 10
      tempAmount -= 1
    }
    tempAmount = change[5]
    while (tempDep >= 5 && change[5] > 0) {
      dispatch(decDeposit(5))
      dispatch(decChange({ value: '5' }))
      dispatch(incMoney({ value: '5' }))
      tempDep -= 5
      tempAmount -= 1
    }
    tempAmount = change[1]
    while (tempDep >= 1 && change[1] > 0) {
      dispatch(decDeposit(1))
      dispatch(decChange({ value: '1' }))
      dispatch(incMoney({ value: '1' }))
      tempDep -= 1
      tempAmount -= 1
    }

    let tempCart = cart.slice(0)
    let tempProducts = JSON.parse(JSON.stringify(products))
    while (tempDep > 0) {
      const found = tempProducts.find((product: IProduct) => product.price <= tempDep && product.amount > 0)
      if (found) {
        dispatch(decAmount(found.id))
        tempProducts[found.id - 1].amount -= 1
        dispatch(decDeposit(found.price))
        if (tempCart.find(product => product.id === found.id)) {
          dispatch(incAmount(found.id))
          tempCart = tempCart.map(product => {
            if (product.id !== found.id) return product
            return {
              ...product,
              amount: product.amount + 1
            }
          })
        } else {
          dispatch(pushProduct({ ...found, amount: 1 }))
          tempCart.push({ ...found, amount: 1 })
        }
        tempDep -= found?.price
      } else {
        break
      }
    }
  }

  return (
    <div>
      <MyButton onClick={toggle}>Внести деньги</MyButton>
      <MyButton onClick={onClickChange}>Получить сдачу</MyButton>
    </div>
  )
}

export default ControlPanel