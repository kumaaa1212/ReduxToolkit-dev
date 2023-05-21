import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { openModal } from '../features/Modalslice'
const CartContaer = () => {
  const dispatch = useDispatch()
  const {amount,items,totalQuantity} = useSelector((state: any) => state.cart)
  if(amount < 1){
    return(
      <div className='cart'>
        <header>
          <h2>買い物かご</h2>
          <h4 className='empty-cart'>何も入っていません</h4>
        </header>
      </div>
    )
  }
  return(
    <section className='cart'>
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>{items.map((item: React.JSX.IntrinsicAttributes & { id: any; title: any; price: any; img: any; amount: any }) =>{
        return <CartItem key={item.id} {...item} />
      })}</div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>合計<span>{totalQuantity}円</span></h4>
        </div>
        <button className='btn clear-btn' onClick={() =>dispatch(openModal())}>全削除</button>
      </footer>
    </section>
  )
}

export default CartContaer
