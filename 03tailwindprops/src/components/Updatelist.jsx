import React,{useState} from 'react'

function Updatelist() {
  const[item,setItem] = useState([]);
  const[input,setInput] = useState("")
  const addHandler = ()=>{
   setItem([...item,input])
   setInput("")
  }
  const removeHandler = ()=>{
   setItem(item.slice(0,-1))
  }
  return (
    <div className='w-full'>

<div className="max-w-full">
   <ul className= 'flex gap-2'>
        {item.map((value,index)=>(
          <li key = {index}>{value}</li>
        ))}
      </ul>
</div>
     
      <input

      value={input}
      type='text'
      onChange={(e)=>setInput(e.target.value)}
   className='border-2 mt-4 border-gray-300 rounded-md p-2 w-full'
      />

    <div className="max-w-full">
      <h2></h2>
         <button onClick={addHandler}>
    add value
  </button>
    </div>
    <div className="max-w-full">
        <button onClick={removeHandler}>
            remove value

        </button>
    </div>


    </div>
  )
}

export default Updatelist