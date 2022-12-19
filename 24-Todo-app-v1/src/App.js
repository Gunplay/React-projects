import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  console.log(todos)

  const addTodoHandler = (text) => {
    // Массив из старых значений + new text
    setTodos([...todos, text])
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Передаем функцию в TodoForm */}
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
