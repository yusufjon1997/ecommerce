import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalPrice} from '../../store/cart/cartSelector';

function Orders() {

  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);


  return (
    <div className='orders-container'>
      <div className="orders-header">
        <h5 className='title'>Orders</h5>
        <span>{cartItems.length}</span>
      </div>
      <div className="orders">
      {
        cartItems.map((cartItem) => {
          return <div className="order" key={cartItem.id}>
          <img src={cartItem.imageUrl} alt="" width="80px" height="70px" />
          <h5>{cartItem.name}</h5>
          <h5>{cartItem.quantity} x {cartItem.price}$</h5>
        </div>
        }) 
      }
      </div>

      <div className="orders-header">
        <h5>Total : {totalPrice}$</h5>
      </div>

    </div>
  )
}

export default Orders