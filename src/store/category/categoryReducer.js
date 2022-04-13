import { CategoryActionTypes } from "./categoryActionTypes";

export const initialState = {
    categoriesMap : {}
}

export const categoriesReducer = (state = initialState , action = {} ) => {
    const { type , payload } = action;

    switch (type) {
        case CategoryActionTypes.setCategoryMap:
            return {...state , categoriesMap : payload}
        default:
            return state;
    }

}