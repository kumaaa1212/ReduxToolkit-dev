import React from 'react'
import { useSelector } from 'react-redux'
import { CartIcon } from '../cartIcon'
const Navbar = () => {
  const {amount }= useSelector((state: any) => state.cart)
  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux Shoppoing</h3>
        <div className='nav-container'>
            <CartIcon/>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar