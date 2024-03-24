import NewtodoForm from "./NewtodoForm";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos,setTodos] = useState([]);

  function addtodo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id:crypto.randomUUID(),title,completed:false},
      ]
    })
  }

  function toggleTode(id,completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          todo.completed = completed
          return {...todo,completed}
        }

        return todo
      })
    })
  }

    function deletetodo(id){
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id != id)
      })
    }
       
  
    return <>
    
    <NewtodoForm onSubmit={addtodo}/>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      {todos.length === 0 && "No todos"}
      {todos.map(todo =>{
        return <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed} onChange={e => toggleTode(todo.id,e.target.checked)}/>
          {todo.title}
        <button onClick={() => deletetodo(todo.id)} className="btn btn-danger">Delete</button>
        </label>
      </li>
      
      })}
   
    </ul>
    </>
} 