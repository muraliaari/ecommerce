import React from 'react'

const Cart = (props) => {
  return (
    <div>
        <>
        <i class="fa-solid fa-cart-shopping"></i><span> {props.state.length}</span>
        </>
    </div>
  )
}

export default Cart