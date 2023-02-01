import { money } from "../items/money";
import { IMoney } from "../types/money";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IMoney = money

export interface MoneyAction {
  value: 1 | 5 | 10 | 50 | 100 | 500 | 1000;
}

export const monyeSlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    incMoney: (state, action: PayloadAction<MoneyAction>) => {
      state[action.payload.value] += 1
    },
    decMoney: (state, action: PayloadAction<MoneyAction>) => {
      state[action.payload.value] -= 1
    }
  }
})

export const { incMoney, decMoney } = monyeSlice.actions

export default monyeSlice.reducer