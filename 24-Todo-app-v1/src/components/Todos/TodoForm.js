import { useState } from 'react'
import styles from './TodoForm.module.css'

console.log(styles)

function TodoForm({ addTodo }) {
  // Controlled input Enter
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
    console.log(e.target)
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="input"
          placeholder="Enter new todo"
          // Controlled input Enter
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
