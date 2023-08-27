import { BUY_CHEESE } from "./cheeseActionType";

const initialState={noOfCheese:999}
export default function cheeseReducer(state=initialState, action){

    switch (action.type) {
        case BUY_CHEESE:
            
            return {
                ...state,
                noOfCheese: state.noOfCheese-action.payload,
            }
    
        default:
           return state
    }

}