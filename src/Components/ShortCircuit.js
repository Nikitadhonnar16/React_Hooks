import React, { useState } from 'react'

const ShortCircuit = () => {

    const[val, setVal]=useState("nsunildh")

  return (
    <div>
      
      <h3>{val || "Nikita" }</h3>
      <h3>{val && "Dhonnar"}</h3>
    </div>
  )
}

export default ShortCircuit
