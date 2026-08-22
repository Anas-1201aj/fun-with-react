import { useState,useCallback,useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

   // use ref
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz";

  if(numberAllowed) str += "1234567890";
  if(charAllowed) str += "!@#$%^&*(){}:?>.<~`";
  for(let i = 1; i <=length; i++){
  let char = Math.floor(Math.random() * str.length + 1);
  pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length,numberAllowed,charAllowed,setPassword]);

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();             // (?)it is used here to indicate optional
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
  passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator]);
  return (
    <>
   <div className="w-full max-w-lg mx-auto rounded-2xl shadow-md px-4 py-6 my-8 bg-gray-800">
  <h1 className="text-center text-white text-xl font-bold mb-4">
    Password Generator
  </h1>

  <div className="flex shadow rounded-xl overflow-hidden mb-4">
    <input
      type="text"
      value={password}
      className="outline-none w-full px-3 py-2 bg-white text-black"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />
    <button onClick={copyToClipBoard} 
    className='bg-blue-500 shrink-0 cursor-pointer w-15 hover:bg-green-400'>copy</button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input
      type ="range"
      min={6}
      max={50}
      value={length}
      className='cursor-pointer '
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label className='text-orange-500'>length : {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox"
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{
        setNumberAllowed((prev)=> ! prev);     // prev value is getting reversed from true to false and false to true
      }}
      />
      <label className='text-orange-500' htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox" 
      defaultChecked={charAllowed}
       id="charInput"
       onChange={()=>{
        setCharAllowed((prev)=> !prev);
       }}
       />
       <label className='text-orange-500' htmlFor="charInput">characters</label>
    </div>
  </div>
</div>
    </>
  )
}

export default App
