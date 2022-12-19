import { useState } from 'react'
import styles from './TodoForm.module.css'

console.log(styles)

function TodoForm() {
  return (
    <form>
      <input
        className={styles.userText}
        type="text"
        name="input"
        placeholder="Enter new todo"
      ></input>
      <button className={styles.buttonSubPush} type="Submit">
        Submit
      </button>
    </form>
  )
}

export default TodoForm
