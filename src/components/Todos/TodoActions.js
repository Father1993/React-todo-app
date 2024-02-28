import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodoActions.module.css';
import Button from '../UI/Button';

function TodoActions({
    resetTodos,
    deleteCompletedTodos,
    completedTodosExist,
}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Refresh todos" onClick={resetTodos}>
                <RiDeleteBin2Line />
            </Button>
            <Button
                title="Clear Completed todos"
                onClick={deleteCompletedTodos}
                disabled={!completedTodosExist}
            >
                <RiRefreshLine />
            </Button>
        </div>
    );
}

export default TodoActions;
