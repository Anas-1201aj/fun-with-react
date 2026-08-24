import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoLists from './components/TodoLists'

import './App.css'
import { TodoProvider } from './Contexts/TodoContext'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateTodo = (todo, id) => {
    setTodos((prev) => prev.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo)))
  }
  //  setTodos((prev)=>{
  // if(prev.map((eachTodo)=>(eachTodo=== id))){
  //     todo
  // } else{
  //     eachTodo
  // }
  //  })

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => (eachTodo.id !== id)))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, Completed: !prevTodo.Completed } : prevTodo))
  }
  //getItem
  useEffect(()=>{
   const todos = JSON.parse(localStorage.getItem("todos"))
   if(todos && todos.length > 0){
    setTodos(todos)
   }
  },[])
  //setItem   JSON.stringfy because our localstrg dont take integer takes only strng
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos]);

return(

  <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>


    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md bg-white rounded-lg px-4 py-3 text-black">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
      <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
         {todos.map((todo)=>(
          <div key ={todo.id}
          className='w-full'>
            <TodoLists todo = {todo}/>
            
          </div>
         ))}
        </div>
      </div>
    </div>
  </TodoProvider>
)
}

export default App
