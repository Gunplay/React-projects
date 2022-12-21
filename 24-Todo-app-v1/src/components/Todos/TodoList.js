import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
  // const {todos} = props
  //   return (
  //     <>
  //       <Todo />
  //       <Todo />
  //       <Todo />
  //     </>
  //   )
  // Перебираем массив, взависимости сколько будет в массиве строк, столько элементов и будет
  return (
    <div className={styles.todoListContainer}>
      {/* Если нету строк в массиве, то true! <h2 style={{ color: 'white' }}>ToDo list is empty</h2> */}
      {!todos.length && <h2 style={{ color: 'white' }}>ToDo list is empty</h2>}
      {/* false */}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList
