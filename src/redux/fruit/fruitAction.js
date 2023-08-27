import { BUY_FRUIT } from "./fruitActionType";

export function buyFruit (noOfFruits){
    return{
        type: BUY_FRUIT,
        payload: noOfFruits
    }
}