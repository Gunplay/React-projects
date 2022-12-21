import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' // generation uniq key (npm i uuid)
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  // массив строк, скоро передеалю на массив объктов
  const [todos, setTodos] = useState([])
  // console.log(todos)

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    console.log(newTodo)
    // Массив из старых значений + new text
    setTodos([...todos, newTodo]) // newTodo- массив объектов
  }

  const deleteTodoHandler = (id) => {
    // если idx === выбранному index - то удаляем true
    // если не равно, то оставляем false
    // filter оставляет все, которые не совпали с выбранным index
    setTodos(todos.filter((todo) => todo.id != id))
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
