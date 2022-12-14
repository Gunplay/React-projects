import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState(null)
  //
  useEffect(() => {
    console.log('Callback in useEffect called')
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then((response) => response.json())
      .then((json) => setTodo(json))
  }, []) // [todo]// [] - благодаря второму аргументу рендеринг выполняется однократно, т е это массив зависимостей [] и если он пустой
  // то он выполняется однократно при начальном рендренге компонетна и не идёт повторное обращение по по ссылку fetch

  console.log('App rendered')
  console.log(todo)

  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>
}

export default App
