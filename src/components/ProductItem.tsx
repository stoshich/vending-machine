import React, { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { decAmount } from '../redux/productsSlice'
import { IProduct } from '../types/product'
import { decDeposit } from "../redux/depositSlice";
import { incAmount, pushProduct } from '../redux/cartSlice';

const ProductItem: FC<IProduct> = ({ id, name, amount, price }) => {

  const dispatch = useAppDispatch()
  const deposit = useAppSelector(state => state.deposit.value)
  const cart = useAppSelector(state => state.cart)

  const onClickHandler = () => {
    if (deposit >= price && amount > 0) {
      dispatch(decDeposit(price))
      dispatch(decAmount(id))
      cart.find(product => product.id === id) ? dispatch(incAmount(id)) : dispatch(pushProduct({ id, name, price, amount: 1 }))
    }
  }

  return (
    <div className={`product__item  ${amount === 0 ? 'disabled__item' : ''}`} onClick={onClickHandler}>
      <div className='product__title'>{name}</div>
      <div className='product__price'>Цена: {price}</div>
      <div className='product__amount'>Осталось: {amount}</div>
    </div>
  )
}

export default ProductItem