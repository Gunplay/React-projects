import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import App from '../../App'
import Button from '../UI/Button'

function TodosActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <>
      <Button onClick={resetTodos} title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button onClick={deleteCompletedTodos} title=" Clear Completed Todos">
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodosActions
