import React, { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count,setCount]= useState(0);
    const [countTwo, setCountTwo]= useState(0);

    function Increone()
{
    setCount(count+1);
}

// function counter2 = (useCallback ()=>
// {
//     setCountTwo(countTwo+2)
// },[countTwo])

 const counter2= useCallback(()=>
 {
    setCountTwo(countTwo+2)
 },[countTwo])


  return (
    <div>

        <Child countTwo={countTwo} count2={counter2} />

        <h1> {count}  {countTwo}</h1>
     

        <button onClick={Increone}>counter1   </button>
        <button onClick={counter2}>counter2  </button>
      
    </div>
  )
}

export default Parent
