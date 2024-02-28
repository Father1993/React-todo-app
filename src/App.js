import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodoActions from './components/Todos/TodoActions';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    // Добавления задач в массив
    const addTodoHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4(),
        };
        setTodos([...todos, newTodo]);
    };

    // Удаление задач по id
    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Функция для переключения статуса задач
    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };

    // Функция удаления всех задач
    const resetTodosHandler = () => {
        setTodos([]);
    };

    // Функция удаления всех завершенных задач
    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };

    // Функция счетчик для выполненных задач
    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodoActions
                    completedTodosExist={!!completedTodosCount}
                    resetTodos={resetTodosHandler}
                    deleteCompletedTodos={deleteCompletedTodosHandler}
                />
            )}

            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
            />

            {completedTodosCount > 0 && (
                <h2>{`You have completed ${completedTodosCount} ${
                    completedTodosCount > 1 ? 'todos' : 'todo'
                }`}</h2>
            )}
        </div>
    );
}

export default App;
