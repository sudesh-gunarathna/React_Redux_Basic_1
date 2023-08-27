import { createStore, combineReducers  } from "redux";
import fruitReducer from "./fruit/fruitReducer";
import milkReducer from "./milk/milkReducer";
import cheeseReducer from "./cheese/cheeseReducer";


const rootReducer = combineReducers({
    fruit: fruitReducer,
    milk: milkReducer,
    cheese: cheeseReducer,
    
})

const store = createStore(rootReducer)

export default store;