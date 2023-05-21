import { createSlice } from "@reduxjs/toolkit"
import cartItems from "../cartItems"
const initialState = {
  items: cartItems,
  amount: 0,
  totalQuantity: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    clearCart: (state) => {
      return {items:[],amount:0,totalQuantity:0}
    },
    removeItem: (state,action) => {
      const id = action.payload
      state.items = state.items.filter((item) => item.id !== id)
    },
    increase: (state,action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      cartItem.amount += 1;
    },
    decrease: (state,action) => {
      const cartItem = state.items.find((item) => item.id === action.payload);
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let totalQuantity = 0;
      state.items.forEach((item) => {
        amount += item.amount
        totalQuantity += item.amount * item.price;
      })
      state.amount = amount;
      state.totalQuantity = totalQuantity;
    }
  }
})

export const { clearCart,removeItem,increase,decrease,calculateTotals } = cartSlice.actions
export default cartSlice.reducer


// reducerに設定するプロパティはactionを勝手に認識される


// removeItem: (state,action) => {

// }
// この用に書いてactionの中身をconsoleで確認すると、actionの中にpayloadが勝手に設定されている。dispath実行した時のひきすうがpayloadに入る