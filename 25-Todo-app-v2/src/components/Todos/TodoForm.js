import { useState } from 'react'
import styles from './TodoForm.module.css'

console.log(styles)

function TodoForm({ addTodo }) {
  // Controlled input Enter
  const [text, setText] = useState('')
  const [field, setField] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // if (text) {
    //   addTodo(text)
    // }

    if (text) {
      addTodo(text)
      setField(false)
    }
    // else {
    //   setField(true)
    // }
    setText('')
    console.log(e.target)
  }
  console.log(field)
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        {/* {field && <h1>Input field is empty</h1>} */}
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

// text ? addTodo(text) : <h1>false</h1>
// text
export default TodoForm
