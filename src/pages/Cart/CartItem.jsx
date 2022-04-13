import React from 'react'
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io'
import { useSelector , useDispatch } from 'react-redux';
import { selectCartItems} from '../../store/cart/cartSelector';
import { addItemToCart , removeItemfromCart , clearItemFromCart } from '../../store/cart/cartAction';

import './CartItem.scss';

function CartItem({ cartItem}) {
/// store current cartitems 
    const currentCartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
/// action increment 

const addHandler = () => {
    dispatch(addItemToCart(currentCartItems , cartItem))
}

const removeHandler = () => {
    dispatch(removeItemfromCart(currentCartItems , cartItem));
}

const clearItem = () => dispatch(clearItemFromCart(currentCartItems , cartItem));

  return (
    <div className="cart-item">
        <div className="cart-item-detail">
            <img src={cartItem.imageUrl} alt="" width="90%" height="150px" />
        </div>
        <div className="cart-item-detail">
            <h5>{cartItem.name}</h5>
        </div>
        <div className="cart-item-detail d-flex pl-4">
            <span onClick={removeHandler}>{ <IoIosArrowBack />}</span>
            <h5>{cartItem.quantity}</h5>
            <span onClick={addHandler}>{ <IoIosArrowForward />}</span>
        </div>
        <div className="cart-item-detail">
            <h5>{cartItem.price}$</h5>
        </div>
        <span onClick={clearItem}>X</span>
    </div>
  )
}

export default CartItem;