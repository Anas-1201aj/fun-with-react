import React,{useState}from 'react'

function Toggle() {
    const [isToggle,setIsToggle] = useState(false);
    const handler = ()=>{
        setIsToggle(prev =>  !prev)
    }
  return (
    <div>
       <button onClick={handler}>
        {isToggle ? "on" : "off"}
       </button>
    </div>
  )
}

export default Toggle