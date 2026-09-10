import React,{useState} from 'react'

function Charcounter() {
    const[charCount,setCharCount] = useState("");
  return (
    <div className='w-full'>
        <div className="max-w-full">
            <textarea
            type = 'text'
            onChange={(e)=> setCharCount(e.target.value)}
            className='border-2'
            />
        </div>
        <div className="max-w-full">
            <h2>Total: {charCount.length}</h2>
        </div>
    </div>
  )
}

export default Charcounter