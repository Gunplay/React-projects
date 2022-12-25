import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' // generation uniq key (npm i uuid)
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

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
  // Создаём функцию toggle toggleTodoHandler, так как компонет App знает состояние Todo and TodoList
  // и так можно будет добовлять новые кнопки, на пример удаление всех todo and completed

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? // Разбаваем объект todo - на props
            { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo } // мы не копируем объект, а создаём новый оьъект (объект это ссылочный)
      })
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === !true)) //false
  }

  let completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  console.log(completedTodosCount)

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Передаем функцию в TodoForm */}
      <TodoForm addTodo={addTodoHandler} />
      {!todos.length ? ( // {!!todos.length && <TodosActions/>}
        ''
      ) : (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodoHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default App
