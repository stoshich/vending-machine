import React, { FC } from 'react'
import { IProduct } from '../types/product'
import ProductItem from './ProductItem'

interface IProductList {
  items: IProduct[]
}

const Products: FC<IProductList> = ({ items }) => {
  return (
    <div className='products__container'>
      {items.map(product => <ProductItem key={product.id} {...product} />)}
    </div>
  )
}

export default Products