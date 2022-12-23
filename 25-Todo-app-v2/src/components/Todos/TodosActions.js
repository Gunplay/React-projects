import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import App from '../../App'
import Button from '../UI/Button'
import style from './TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={style.todosActionsContainer}>
      <Button onClick={resetTodos} title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodos}
        title=" Clear Completed Todos"
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
