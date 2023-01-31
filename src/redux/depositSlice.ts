import { deposit } from "../items/money";
import { IMoney } from "../types/money";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MoneyAction } from "./moneySlice";

interface DepositState {
  value: number
}

const initialState: DepositState = {
  value: 0
}
export const depositSlice = createSlice({
  name: 'deposit',
  initialState,
  reducers: {
    incDeposit: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decDeposit: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { incDeposit, decDeposit } = depositSlice.actions

export default depositSlice.reducer