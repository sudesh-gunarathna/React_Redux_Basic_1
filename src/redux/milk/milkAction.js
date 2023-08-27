import { BUY_MILK } from "./milkActionType";


export default function byuMilk(noOfMilk)
{
    return{
        type: BUY_MILK,
        payload: noOfMilk
    }
}