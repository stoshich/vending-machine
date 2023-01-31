import { IProduct } from "../types/product";
import { products } from "../items/items";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IProduct[] = products

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    decAmount: (state, action: PayloadAction<number>) => {
      state[action.payload - 1].amount -= 1
    }
  }
})

export const { decAmount } = productsSlice.actions

export default productsSlice.reducer