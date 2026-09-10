import React,{useState} from 'react'

function Backgroundtextchanger() {
    const [bgChanger,setbgChanger] = useState("blue");
    const [toggle,setToggle] = useState(false);
    const [text, setText] = useState("Hello");
    const changeHandler = ()=>{
     setbgChanger(toggle ? "blue" : "red")
     setToggle(!toggle)
     setText("welcome")
    }
  return (
    <div className = "w-full"

       style={{ backgroundColor: bgChanger }}>
        <h1>{text}</h1>
     
    <div>
    <button onClick={changeHandler}
    className='bg-blue-300 rounded-md  text-xl text-black px-1 py-0.5 hover:cursor-pointer'>
      
    click me 
    </button>
</div>
</div>
  )
}

export default Backgroundtextchanger