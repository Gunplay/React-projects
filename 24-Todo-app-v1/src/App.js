import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  // массив строк, скоро передеалю на массив объктов
  const [todos, setTodos] = useState([])
  // console.log(todos)

  const addTodoHandler = (text) => {
    // Массив из старых значений + new text
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    // если idx === выбранному index - то удаляем true
    // если не равно, то оставляем false
    // filter оставляет все, которые не совпали с выбранным index
    setTodos(todos.filter((_, idx) => idx != index))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Передаем функцию в TodoForm */}
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
