import React, { useState } from 'react'

const SpreadOprator = () => {

const [data,setData]= useState(
     {
            Name : 'Nikita',
            age:23,
            degree:'BE'
    }
)

function changedata()
{
    setData({...data, Name:'Nikita Dhonnar'})
}


  return (
    <div>


              <h3>Name:{data.Name}, age:{data.age}  & degree:{data.degree} </h3>
              <button onClick={changedata}>Update</button>



    </div>
  )
}

export default SpreadOprator
