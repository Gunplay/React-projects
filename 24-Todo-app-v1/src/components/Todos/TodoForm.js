import { useState } from 'react'
import styles from './TodoForm.module.css'

console.log(styles)

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className={styles.userText}
        type="text"
        name="input"
        placeholder="Enter new todo"
        // Controlled input Enter
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button className={styles.buttonSubPush} type="Submit">
        Submit
      </button>
    </form>
  )
}

export default TodoForm
