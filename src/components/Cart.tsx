import React, { FC } from 'react'
import { useAppSelector } from '../redux/hooks'

const Cart: FC = () => {
  const cart = useAppSelector(state => state.cart)
  return (
    <div className='cart__container'>
      Купленный товар:
      <div className='cart__items'>
        {cart.length ?
          cart.map(product => (
            <div className='cart__product' key={product.id}>
              <div>{product.name}</div>
              <div>Количество: {product.amount}</div>
            </div>
          ))
          :
          <div>Пусто</div>}
      </div>
    </div>

  )
}

export default Cart