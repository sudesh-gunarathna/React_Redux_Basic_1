import { BUY_MILK } from "./milkActionType";

const initialState = {
    noOfMilk: 100,
}

export default function milkReducer (state =initialState, action){

    switch (action.type) {
        case BUY_MILK:
            
            return{
                ...state,
                noOfMilk: state.noOfMilk-action.payload,
            }
    
        default:
            return state;
    }
}