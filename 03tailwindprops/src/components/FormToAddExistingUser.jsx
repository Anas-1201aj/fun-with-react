import { useState } from "react"
import React from 'react'

function FormToAddExistingUser() {
     const user = {
       name :"anas",
       email :  "anas12@gmail.com"

    }
    const[name,setName] = useState(user.name);
    const[email,setEmail] = useState(user.email);
    const[update,setUpdate] = useState([]);
   
    const submitHandler = (e)=>{
        e.preventDefault();
       setUpdate(prev=>[...prev,{
        name: name,
        email:email
       }])
    }

  return (
    <>
    <div className="w-full">
        <h1 className="w-full">
            Edit Existing user
        </h1>
        <div className="w-full">
            <form onSubmit={submitHandler}>
                <input
                placeholder=""
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <div className="w-full">
                    <input
                    placeholder=""
                    type="text"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    
                    />

                </div>
                <div className="w-full">
                    <button type = "submit">update</button>
                </div>
            </form>
        </div>
        <div className="w-full">
            {update.map((value,index)=>(
                <div key={index}>
                    <p>
                        {value.name}

                    </p>
                    <p>
                        {value.email}
                    </p>
                     </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default FormToAddExistingUser