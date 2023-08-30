import { createStore, combineReducers, applyMiddleware, compose  } from "redux";
import fruitReducer from "./fruit/fruitReducer";
import milkReducer from "./milk/milkReducer";
import cheeseReducer from "./cheese/cheeseReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { albumReducer } from "./album/albumReducer";



const rootReducer = combineReducers({
    fruit: fruitReducer,
    milk: milkReducer,
    cheese: cheeseReducer,
    album: albumReducer,
    
})
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)) )

export default store;