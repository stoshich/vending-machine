import { money } from "../items/money";
import { IMoney } from "../types/money";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IMoney = money

interface MoneyAction {
  value: 1 | 5 | 10 | 50 | 100 | 500 | 1000;
  amount: number;
}

export const monyeSlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<MoneyAction>) => {
      state[action.payload.value] += action.payload.amount
    },
    decrement: (state, action: PayloadAction<MoneyAction>) => {
      state[action.payload.value] += action.payload.amount
    }
  }
})

export const { increment, decrement } = monyeSlice.actions

export default monyeSlice.reducer