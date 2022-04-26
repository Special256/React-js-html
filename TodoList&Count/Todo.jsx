import React, { useState } from 'react';

function App() {
  
  const [ todos, setTodos ] = useState([]);
  const [ todo, setTodo ] = useState('');
  const [count, setCount] = useState(0)
  
  const handleInput = (e) => {
    setTodo(e.currentTarget.value)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if(todo === "") return
    let copy = [...todos];
    copy = [...copy, { id: todos.length + 1, task: todo, checked: false }];
    setTodos(copy);
    setTodo("");
    setCount(copy.length)
  }
  
  const handleToggle = (id) => {
    const newTodos = [...todos]
    const done = newTodos.find(todo => todo.id === Number(id))
    done.checked = !done.checked
    setTodos(newTodos)
    setCount(count - 1)
  }

  const handleDelete = () => {
    const newTodos = todos.filter(todo => !todo.checked)
    setTodos(newTodos);
    setCount(newTodos.length)
  }

  return (
    <div className="App">
      <h3>Todo List</h3>
      <ul type="none" style = {{padding: 0}}>
        {todos.map(todo => (
          <li key={todo}>
            <input type="checkbox" checked={todo.checked ? true : false} value={todo.id} onClick={() => handleToggle(todo.id)} />
            {todo.task}
          </li>
        ))}
      </ul>
      <input value={todo} type="text" onChange={handleInput} placeholder="Enter task..."/>
      <button onClick={handleAdd}> Add </button>
      <button onClick={handleDelete}> Delete</button>
      <p> Number : {count} </p>
    </div>
  );
}

export default App;