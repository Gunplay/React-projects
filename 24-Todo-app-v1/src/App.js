import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodos] = useState(['todo one', 'todo two'])
  console.log(todos)
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
