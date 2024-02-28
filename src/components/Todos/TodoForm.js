import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
    // Контролируемое поле ввода
    const [text, setText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Добавляет текст в массив задач
        addTodo(text);
        // Обнуление значение в поле ввода
        setText('');
    };

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder="Enter new todo"
                    value={text}
                    // Меняем состояние при вводе в input
                    onChange={(e) => setText(e.target.value)}
                />
                <Button type="submit" title="Submit">
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default TodoForm;
