import { useDispatch, useSelector } from "react-redux"
import { buyFruit } from "../redux/fruit/fruitAction";


function FruitSection(props) {
   /**const noOfFruits= useSelector((state)=>{
        return state.fruit.noOfFruits

    })*/
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(buyFruit(1))

    }

    const noOfFruits = useSelector((state)=> state.fruit.noOfFruits)
  return (
    <div>
      <h2>No Of Fruits</h2>
      <div>{noOfFruits}</div>
      
      
    
      <button onClick={handleClick}>Buy Fruits </button>
    </div>
  )
}

export default FruitSection
