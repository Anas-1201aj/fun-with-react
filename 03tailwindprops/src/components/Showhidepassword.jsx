import React,{useState}from 'react'

function ShowHidePassword() {
    const [showPassword,setShowPassword] = useState(false);
    const handler = ()=>{
    setShowPassword(prev => !prev )
    }
    return (
    <div className='w-full'>
    <div className="max-w-max">
    <input
    placeholder='type your password'
    className = "rounded-md border-2"
    type= {showPassword ? "text" : "password"}
  
    />
    <button
    className='bg-blue-300 rounded-md border-2 hover: cursor-pointer'
    onClick={handler}
    
    >{showPassword ? "Hide" : "show"}
    </button>
   
    </div>


    </div>
  )
}

export default ShowHidePassword