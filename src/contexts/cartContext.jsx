import { createContext, useState } from 'react';

 const addItemCart = (cartItems, product) => {
    // check if product is already in cart 
    
    const existingItem = cartItems.find(cartItem => cartItem.id === product.id);

    if(existingItem) {
        return cartItems.map((cartItem) => cartItem.id === product.id ?
             {...cartItem, quantity : cartItem.quantity + 1 } : 
                 cartItem)
    }

    return [...cartItems , {...product , quantity: 1}];   

}


export const CartContext = createContext({
    cartItems : [],
    addItemToCart: () => {}
});


export const CartProvider = ({ children }) => {
    
    const [cartItems , setCartItems ] = useState([]);

const addItemToCart = (product) => setCartItems(addItemCart(cartItems , product));

console.log(cartItems)
    
    const value = { cartItems , setCartItems , addItemToCart};

    return <CartContext.Provider value={value}> { children } </CartContext.Provider>
}
