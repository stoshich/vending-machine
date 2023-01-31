import { moneyChange } from "../items/money";
import { IMoney } from "../types/money";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MoneyAction } from "./moneySlice";

const initialState: IMoney = moneyChange

export const moneyChangeSlice = createSlice({
  name: 'moneyChange',
  initialState,
  reducers: {
    incChange: (state, action: PayloadAction<MoneyAction>) => {
      state[action.payload.value] += action.payload.amount
    },
    decChange: (state, action: PayloadAction<MoneyAction>) => {
      state[action.payload.value] += action.payload.amount
    }
  }
})

export const { incChange, decChange } = moneyChangeSlice.actions

export default moneyChangeSlice.reducer