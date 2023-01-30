import React, { FC, useState } from 'react'
import { IProduct } from '../types/product'

const ProductItem: FC<IProduct> = ({ id, name, amount, price }) => {

  const [left, setLeft] = useState(amount)

  const onClickHandler = () => {
    if (left > 0) setLeft(left - 1)
  }

  return (
    <div className='product__item' onClick={onClickHandler}>
      <div className='product__title'>{name}</div>
      <div className='product__price'>Цена: {price}</div>
      <div className='product__amount'>Осталось: {left}</div>
    </div>
  )
}

export default ProductItem