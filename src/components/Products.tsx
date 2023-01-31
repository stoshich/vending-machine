import React, { FC } from 'react'
import { useAppSelector } from '../redux/hooks'
import { IProduct } from '../types/product'
import ProductItem from './ProductItem'

const Products: FC = () => {
  const products = useAppSelector(state => state.products)
  return (
    <div className='products__container'>
      {products.map(product => <ProductItem key={product.id} {...product} />)}
    </div>
  )
}

export default Products