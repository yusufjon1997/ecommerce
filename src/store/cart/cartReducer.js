import { CartActionTypes } from "./cartActionTypes";



export const initialState = {
    cartItems : []
}

export const cartReducer = (state = initialState , action ) => {
    const { type , payload } = action;

    switch (type) {
        case CartActionTypes.addItemToCart : 
            return {...state , cartItems: payload}
        default:
            return state;
    }
}