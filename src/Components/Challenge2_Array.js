import React, { useState } from 'react'

const Challenge2_Array = () => {

    
    const data =
    [
        {id:1, Name:'Nikita', role:'FrontEnd'},
        {id:1, Name:'Ram', role:'Full Stack'},
        {id:1, Name:'charan', role:'Tester'},
        {id:1, Name:'pihu', role:'dev'}

    ]

    const [Data,setData]=useState(data)


    function hidedata()
    {
        setData([])
    }

  return (
    <div>



             {/* <label htmlFor="">Nikita</label>
             <label htmlFor="">FrontEnd</label>
            <button>Clear</button>
       */}

                
              

            {
                Data.map((cur)=>{
            
                    return(
                        <div>
                             <label htmlFor="">{cur.Name}</label>
                             <label htmlFor="" style={{margin:'20px'}}>{cur.role}</label>
                        </div>
                    )
                })
            }
             <button onClick={hidedata}>Clear</button>
    </div>
  )
}

export default Challenge2_Array
