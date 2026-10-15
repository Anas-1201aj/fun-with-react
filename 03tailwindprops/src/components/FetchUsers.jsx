//Fetch users from an API using useEffect and display their name, email, and phone number.
import React,{useState,useEffect} from 'react'


function FetchUsers() {

const[users,setUsers] = useState([]);
const[error,setError] = useState("");
const[loading,setLoading] = useState(true);
useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
  if(!res.ok){
  throw new Error("failed to fetch users")
  }
  return res.json();
  
})
.then((users)=>{
 setUsers(users);
 setLoading(false)
})
.catch((err)=>{
  setError(err.message)
  setLoading(false);
})
},[]);

if(loading){
  return <h2>loading users...</h2>
}
if(error){
  return <h2>{error}</h2>
}
  return (
    <>
    {users.map((value,index)=>{
        return(
        <div 
        key={index}
        className="w-full">
     {value.name}
     {value.email}
     {value.phone}
        </div>
  )  })}
    </>
  )
}

export default FetchUsers