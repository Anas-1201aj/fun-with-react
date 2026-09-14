import React,{useState} from 'react'

function Login() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const[welcome,setWelcome] = useState("")
   
    const submitHandler = (e)=>{
        e.preventDefault()
      try {
        if(!email){
            throw new  Error("email is required");
        }
          if(!pass){
            throw new  Error("password is required");
        }
            if(pass.length <= 6){
                throw new  Error("password length should be atleast 6 digit");
            }
            setWelcome("welcome"+" "+ email)

      } catch (error) {
        alert(error.message )
        
      }
       
    }
  return (
    <div>

        <form onSubmit={submitHandler} > 
            <input className= ' border-2'
            placeholder='enter you email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            />
            {" "}
             <input className= ' border-2'
            placeholder='enter you password'
            onChange={(e)=>setPass(e.target.value)}
            value={pass}
            />
           <button type='submit' >submit</button>
      
         </form>
         <h2>{welcome}</h2>

    </div>
  )
}

export default Login