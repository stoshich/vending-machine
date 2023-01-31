import { decDeposit } from "../redux/depositSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { MoneyAction } from "../redux/moneySlice";
import { IProduct } from "../types/product";

export function useDepositMoney(item: IProduct) {
  const total = useAppSelector(state => state.deposit.value)
  const dispatch = useAppDispatch()
  if (total >= item.price) dispatch(decDeposit(item.price))
}