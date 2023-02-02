import { IProduct } from "../types/product";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IProduct[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    pushProduct: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload)
    },
    incAmount: (state, action: PayloadAction<number>) => {
      const res = state.map(product => {
        if (product.id !== action.payload) return product
        return {
          ...product,
          amount: product.amount + 1
        }
      })
      state.length = 0
      state.push(...res)
    }
  }
})

export const { pushProduct, incAmount } = cartSlice.actions

export default cartSlice.reducer