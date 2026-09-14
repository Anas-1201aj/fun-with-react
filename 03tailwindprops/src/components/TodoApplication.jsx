import React,{useState} from 'react';

export default function TodoApplication (){
    const [todo,setTodo] = useState("");
    const[showTodo,setShowTodo] = useState([]);
    const[count,setCount] = useState(0);
    const[countComp,setCountComp] = useState(0);


    const completed = (index)=>{
    setShowTodo(prev=>prev.map((value,i)=>{
        if(i === index){
            return {
                ...value,
                complete: !value.complete
            };
        }
        return value;
       
    }))
     setCountComp(countComp+1);
   
    }

    const deleteTodo =(index)=>{
        setShowTodo(prev=> prev.filter((_,i)=> i !== index));
    }

    const submitHandler = (e)=>{
    e.preventDefault();
     if(todo.length > 0){
     setShowTodo(prev=>[...prev,{
     todo: todo,
     complete:false

    }]);
    }
   
   if(todo.length >0){
    setCount(count+1);
   }
    
    
    setTodo("");
    }

    
    return(
        <>
    <div className="w-full ">
       
           
      <form onSubmit={submitHandler}>
         <h1 className='w-full'>Todo </h1>
         <h2>count: {count}</h2> <h2> completed Count : {countComp}</h2>
            <div className="w-full flex ">
                <input 
                className='border-2 rounded-md w-full text-slate-800 placeholder-bg-slate-400 outline-none transition
                focus:border-blue-400 focus:ring-2 focus:ring-blue-300'
                placeholder='Start With Your Todos'
                type='text'
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                />

            
                <button className='border-2 px-1 py-0.5 bg-green-400 hover:bg-green-500 
                hover:cursor-pointer text-black font-bold rounded-md'
               type ="submit" >
               save todo</button>
               </div>
      </form>

      <div className="w-full bg-slate-100 min-h-screen">
        {showTodo.map((value,index)=>(
            <div className="w-full flex mt-2 "
            key={index}>
                <div className='w-full flex'  >
                   
                    {value.todo}
                    <div className="w-full  flex justify-end">
                         <button onClick={()=> deleteTodo(index)} 
                     className='border-2 px-1 py-0.5 bg-red-500 hover:bg-red-600 
                    hover:cursor-pointer text-black font-bold rounded-md h-12 w-20'
                    >
                        delete
                    </button>
                    </div>
                    <button
                    onClick={()=> completed(index)}

                    className='border-2 bg-green-400 hover:bg-green-500 font-bold text-black rounded-md'>
                   
                    {value.complete ? "completed": "not completed"}</button>

                </div>
                  
                <div>
   
          </div>
            
            </div>
        ))}
      </div>

    

     </div>
        </>
    )
}
