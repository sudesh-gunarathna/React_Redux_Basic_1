import { createStore, combineReducers, applyMiddleware  } from "redux";
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

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store;