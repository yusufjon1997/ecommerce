import { compose , createStore , applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

/// root reducers 

//middleWares when action dispatched before action hits the reducers  it hits the middleware first
const middleWares = [logger];

const composeEnhencers = compose(applyMiddleware(...middleWares));// this pass every middlewares 

export const store = createStore(rootReducer, undefined , composeEnhencers);