import React from 'react'
import Button from '../Button/Button';
import { useDispatch , useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cartSelector';

import { addItemToCart } from '../../store/cart/cartAction';
import './Product.scss';

function Product({ product}) {
const { name , imageUrl , price } = product;

const cartItems = useSelector(selectCartItems);

const dispatch = useDispatch();

const addToCart = () => dispatch(addItemToCart(cartItems,product))


return (
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
        </div>
        <Button buttonType="inverted" onClick={addToCart}>Add to Card</Button>
    </div>
  )
}

export default Product