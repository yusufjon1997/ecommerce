
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalCartItems = (state) => {
    // extract cartItems array from state
    let cartItems = state.cart.cartItems;
    // loop through each item in cart and add each items qty to total
    return cartItems.reduce((total, item) => total + item.quantity , 0);
}

export const selectTotalPrice = (state) => {
    // extract cartItems array from state
    let cartItems = state.cart.cartItems;
    // in each cart item.qty and item.price should be multiplied then add to totalprice
    return cartItems.reduce((total, item) => total += item.quantity * item.price , 0);
}

