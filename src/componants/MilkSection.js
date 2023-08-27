import { useDispatch, useSelector } from "react-redux"
import byuMilk from "../redux/milk/milkAction";

function MilkSection()
{
const noOfMilk = useSelector((state)=>state.milk.noOfMilk);

const dispatch = useDispatch();

 const handleBuyMilk=()=>{
    dispatch(byuMilk(10));

 }

    return(
        <div>
            <h2>No of Milk</h2>
           <div>{noOfMilk}</div>
           <button onClick={handleBuyMilk}>Buy Milk</button>
        </div>
    )
}
export default MilkSection