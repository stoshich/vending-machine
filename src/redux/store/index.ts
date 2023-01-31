import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../productsSlice'
import moneyReducer from '../moneySlice'
import depositReducer from '../depositSlice'
import moneyChangeReducer from '../moneyChangeSlice'


export const store = configureStore({
  reducer: {
    products: productReducer,
    money: moneyReducer,
    deposit: depositReducer,
    change: moneyChangeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch