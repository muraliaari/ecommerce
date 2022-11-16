import React from 'react'
import {Link} from 'react-router-dom'

const Cart = (props) => {
  return (
    <div>
        <>
        <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i><span> {props.cart.length}</span></Link>
        
        </>
    </div>
  )
}

export default Cart