import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../features/Modalslice'
import { clearCart } from '../features/Cart'
const Modal = () => {
  const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>買い物かごをからにする？</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn' onClick={() =>{
            dispatch(clearCart())
            dispatch(closeModal())
          }}>OK</button>
          <button className='btn clear-btn' onClick={() =>dispatch(closeModal())}>OK</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
