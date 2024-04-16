import { all } from 'axios'
import React, { useState } from 'react'

const Basicform = () => {

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

        // to store array (that user enter values )
        const [alldata, setAlldata]= useState([])


   



function submitData(e)
{
    // to change default behaviour of form (thst is automatic refresh)
    e.preventDefault();

  if (email && password)
  {

     // we want email & password value to disply for that storing in obj    
    const newdata = { email:email, password:password }
  

    setAlldata([...alldata, newdata]);


    setEmail('');
    setPassword('');

  }

}

  return (
    <div>
            <form onSubmit={submitData}>

                <label>Email</label>
                <input type="text" name="" id="" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <br/>
                <label>Password</label>
                <input type="password" name="" id=""  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <br/>
                <button>Login</button>

            </form>

            <div>
            
   
            {
                alldata.map((cur)=>
                {
                        // array destructing
                        const {email, password}= cur;

                    return(
                        <>
                        <h3>Email:{email} , Password:{password} </h3>
                        </>
                    )
                })
            }

            </div>
    </div>
  )
}

export default Basicform
