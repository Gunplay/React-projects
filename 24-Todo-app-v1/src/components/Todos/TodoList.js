import Todo from './Todo'

function TodoList({ todos }) {
  // const {todos} = props
  //   return (
  //     <>
  //       <Todo />
  //       <Todo />
  //       <Todo />
  //     </>
  //   )
  // Перебираем массив, взависимости сколько будет в массиве строк, столько элементов и будет
  return todos.map((todo, index) => <Todo key={index} todo={todo} />)
}

export default TodoList
