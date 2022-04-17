import { createStore , applyMiddleware } from "redux";
import { persistStore , persistReducer } from 'redux-persist';
import { composeWithDevTools } from '@redux-devtools/extension';
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";


const persistConfig = {
    key: 'root',
    storage, 
    blacklist : ['user']
}

const persistedReducer = persistReducer(persistConfig , rootReducer);

/// root reducers 

//middleWares when action dispatched before action hits the reducers  it hits the middleware first
// const middleWares = [logger];

// const composeEnhencers = composeWithDevTools(applyMiddleware(...middleWares));// this pass every middlewares 

export const store = createStore(persistedReducer, undefined , composeWithDevTools());

export const persistor = persistStore(store);