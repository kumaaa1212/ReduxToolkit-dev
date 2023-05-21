import React from 'react'
import { MinusIcon, PlusIcon } from '../cartIcon'
import { useDispatch } from 'react-redux'
import { decrease, removeItem } from '../features/Cart'
import { increase } from '../features/Cart'
const CartItem = ({id,title,price,img,amount}) => {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={img}alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}</h4>
        <button className='remove-btn' onClick={() =>dispatch(removeItem(id))}>削除</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() =>dispatch(increase(id))}>
          <PlusIcon/>
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() =>{
          if(amount === 1){
            dispatch(removeItem(id))
            return
            // ここのretrunが大事。
          }
          dispatch(decrease(id))
        }}>
          <MinusIcon/>
        </button>
      </div>
    </article>
  )
}

export default CartItem