import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../productsSlice'
import moneyReducer from '../moneySlice'
import depositReducer from '../depositSlice'
import moneyChangeReducer from '../moneyChangeSlice'
import cartReducer from '../cartSlice'


export const store = configureStore({
  reducer: {
    products: productReducer,
    money: moneyReducer,
    deposit: depositReducer,
    change: moneyChangeReducer,
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch