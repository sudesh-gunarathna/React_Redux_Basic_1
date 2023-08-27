import { BUY_CHEESE } from "./cheeseActionType";


export default function buyCheese (noOfCheese){
   return{
    type: BUY_CHEESE,
    payload: noOfCheese,
   }
}