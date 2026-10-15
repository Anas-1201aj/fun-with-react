import React,{useState} from 'react'


function SearchByFilter() {
const users = ["anas", "javed", "sami"];
const [searchUser,setSearchUser] = useState([]);
const [searchText, setSearchText] = useState("");

const submitHandler = (e)=>{
    e.preventDefault();
    setSearchUser(users.filter((i)=>(
        i.includes(searchText)
    )
  ))
    
}

  return (
    <>
   
  <div className="w-full">
    <h1>SearchByFilter</h1>
    <div className="w-full">
        <form onSubmit={submitHandler}>
            <input
            placeholder='search user'
            type='text'
            onChange={(e)=>setSearchText(e.target.value)}
            />
            <button type='submit'>search</button>
           
        </form>
    </div>
    <div className="w-full">
          {searchText && searchUser.map((value,index)=>(
                <div 
                key={index}
                className="w-full">
                    <div className="w-full">
                        {value}
                    </div>
                </div>
          ) 
           )}
    </div>
  </div>
 </>  
 )
}

export default SearchByFilter