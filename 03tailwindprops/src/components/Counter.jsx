import React, {useState} from 'react'

function Counter() {
    let [counter,setCounter] = useState(0);
    let [number,setNumber] = useState("");
    const handler = ()=>{
    setCounter(prev => prev + Number(number))  // Number("2") =>2 Number is built in function in js
    }
  return (
    <>
   <h1 >Counter :{counter}</h1>
   <input
   placeholder='enter the number'
   className = "border-2 flex items-center justify-content-center"
   type='number'
   value={number}
   onChange={(e)=>setNumber(e.target.value)}
   />
   <button onClick={handler}
   className = "bg-blue-300 rounded-md mt-3 hover: cursor-pointer"
   >
   add value
   </button>
   
    </>
  )
}

export default Counter