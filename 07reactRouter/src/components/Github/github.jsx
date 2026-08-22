import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function github() {
const data = useLoaderData();
//  const [data,setData] = useState([]);

//     useEffect(()=>{
//         fetch(`https://api.github.com/users/Anas-1201aj`)
//         .then((res)=> res.json())
//         .then((data)=> setData(data))
//     },[]);

  return (
    <div className='text-center m-3 p-2 text-3xl text-white bg-gray-500'>Github Followers:{data.followers}
    <img className='ml-145' src = {data.avatar_url} alt = "github img" width = {200}/>
    </div>

  )
}

export default github;

export const gitHubLoader = async ()=>{
   const response = await fetch(`https://api.github.com/users/Anas-1201aj`)
   return response.json()
    
}