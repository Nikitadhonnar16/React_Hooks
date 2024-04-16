import React, { useState } from 'react'
import { useMemo } from 'react';

const UseMemoHook = () => {

    const [count,setCount]= useState(0);
    const [counttwo,setCountTwo]= useState(5);




function Increone()
{
    setCount (count+1);
}

function increfive()
{
    setCountTwo(counttwo+5);
}


const memo =useMemo(function iseven()
{

    console.warn("....counter 1 called  ")
    let i=0;
    while(i<=20000 )i++;
    {
       return count%2==0;
    }
}, [count])

  return (
    <div>

        <h1>counter1: {count}</h1>
        <h1>counter2: {counttwo}</h1>
        <h3>{memo}</h3>


        <button onClick={Increone}>counter1  </button>
        <button onClick={increfive}>counter2 </button>
      
    </div>
  )
}

export default UseMemoHook
