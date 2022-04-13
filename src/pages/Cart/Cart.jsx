import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { Button } from 'react-bootstrap';
import { selectCartItems , selectTotalPrice } from '../../store/cart/cartSelector';
import CartItem from './CartItem';

import './Cart.scss';

function Cart() {

  const cartItems = useSelector(selectCartItems);
  const totalCartPrice = useSelector(selectTotalPrice);

  const navigate = useNavigate();
  
  return (
    <div className="cart-page">
      <div className="cart-header">
        <h5>Product</h5>
        <h5>Description</h5>
        <h5>Quantity</h5>
        <h5>Price</h5>
        <h5>Remove</h5>
      </div>
      
      { cartItems && cartItems.map( cartItem => {
        return <CartItem key={cartItem.id} cartItem={cartItem} /> })
      }
        <div className="cart-footer">
          
          <h3>Total: {totalCartPrice}$ </h3>
          {
            totalCartPrice === 0 ? null : 
            <Button className="btn btn-warning" onClick={() => navigate('/checkout')}>Checkout</Button>
          }
        </div>
      </div>
  )
}

export default Cart