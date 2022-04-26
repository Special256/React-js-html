import React from "react";
import {useState} from "react"

const TodoAdd = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleInput = e => {setTodo(e.target.value)}

  const handleAdd = e => {
    e.preventDefault()
    if(todo === "") return
    setTodos(prevItem => [...prevItem, todo])
    setTodo('')
  }

  return(
    <div>
      <h3> Todo List </h3>
      <ul>
        {todos.map((Items, Index) => (
          <li key = {Index}> {Items} </li>
        ))}
      </ul>
      <input onChange = {handleInput} value = {todo}/>
      <button onClick = {handleAdd}> Add </button>
    </div>
  )
}

export default TodoAdd