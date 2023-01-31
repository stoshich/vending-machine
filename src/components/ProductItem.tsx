import React, { FC, useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { decAmount } from '../redux/productsSlice'
import { IProduct } from '../types/product'

const ProductItem: FC<IProduct> = ({ id, name, amount, price }) => {

  const dispatch = useAppDispatch()

  const onClickHandler = () => {
    if (amount > 0) dispatch(decAmount(id))
  }

  return (
    <div className='product__item' onClick={onClickHandler}>
      <div className='product__title'>{name}</div>
      <div className='product__price'>Цена: {price}</div>
      <div className='product__amount'>Осталось: {amount}</div>
    </div>
  )
}

export default ProductItem