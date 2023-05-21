import React, { useEffect } from 'react';
import Navbar from './component/Navbar';
import CartContaer from './component/CartContaer';
import { useSelector,useDispatch } from 'react-redux';
import { calculateTotals } from './features/Cart';
import Modal from './component/Modal';
export const App = () => {
  const {items} = useSelector((state: any) => state.cart)
  const {isOpen} = useSelector((state: any) => state.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  },[items])
  return(
    <div>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContaer/>
    </div>
  )
}

// react-reduxはreactとreduxwを繋ぐためのライブラリです。