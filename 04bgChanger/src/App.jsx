// Question- when the black is clicked your name should be visible on the screen.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  const [name,setName] = useState();
  const btn1 = ()=>{
    setColor("red")
  }
   const btn2 = ()=>{
    setColor("green")
  }
  return (
    <div
      className="w-full h-screen text-white py-70"
      style={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
         <button onClick = {btn1} className='bg-red-500 rounded-2xl text-white px-2 py-1'>red</button>
          <button onClick={btn2} className='bg-green-800 rounded-2xl  text-white px-2 py-1'>green</button>
          <button onClick={()=> setColor("blue")} className='bg-blue-500 rounded-2xl  text-white px-2 py-1'>blue</button>
          <button onClick={()=> setColor("grey")} className='bg-gray-700 rounded-2xl  text-white px-2 py-1'>grey</button>
          <button onClick={()=>setColor("purple")} className='bg-purple-500 rounded-2xl  text-white px-2 py-1'>purple</button>
          <button onClick={()=>setColor("black")} className='bg-black rounded-2xl  text-white px-2 py-1'>black</button>
          <button onClick={()=>setColor("yellow")} className='bg-yellow-500 rounded-2xl  text-white px-2 py-1'>yellow</button>
          <button onClick={()=>setColor("indigo")} className='bg-indigo-500 rounded-2xl  text-white px-2 py-1'>indigo</button>
        </div>
      </div>
    </div>
  )
}

export default App
