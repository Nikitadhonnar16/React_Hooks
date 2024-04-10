import React, { useState } from 'react'

const Challenge1_Toggle = () => {

    const [name,setName]=useState('Nikita')

    function namechange()
    {
       name =='Nikita' ? setName('Nikita Dhonnar'): setName('Nikita')
    }

  return (
    <div>

         <label htmlFor="">{name}</label><br/>
        <button onClick={namechange}>Click Me</button>
      
    </div>
  )
}

export default Challenge1_Toggle
