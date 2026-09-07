import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
let [counter,setCounter] = useState(0)
const addValue = ()=>{
  
  counter = counter +1;
  setCounter(counter);
  if(counter  >= 10) setCounter(0);
  console.log("button is clicked",counter);
 }
 const removeValue = ()=>{
  counter = counter -1;
  setCounter(counter);
 }

  return (
    <>
      <h1>chai aur react</h1>
      <h2> counter value: {counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
