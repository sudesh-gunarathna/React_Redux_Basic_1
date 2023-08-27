//import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import buyCheese from "../redux/cheese/cheeseAction";

function CheeseSection() {
   const noCheese= useSelector((state)=>state.cheese.noOfCheese);
     const dispatch = useDispatch();
   const handleBuyCheese = ()=>{
    dispatch(buyCheese(18))
  
   }
  return (
    <div>
        <h2>No of Cheese</h2>
       <div>{noCheese}</div> 
      <button onClick={handleBuyCheese}>Buy Cheese</button>
    </div>
  )
}

export default CheeseSection
