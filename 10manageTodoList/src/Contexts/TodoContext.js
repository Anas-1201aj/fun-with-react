import { useContext,createContext } from "react";

export const TodoContext =createContext
 ({
 todos:[
    {
        id:1,
        todoMsg: 'todo msg',
        Completed: false,
    }
 ],
  addTodo: (todo)=>{},
  updateTodo: (todo,id)=>{},
  deleteTodo: (id)=>{},
  toggleComplete: (id)=>{}
})

export default function useTodo(){
return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider


    


