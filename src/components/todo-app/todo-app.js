import React from 'react';
import TodoList from '../todo-list/todo-list';
import TodoFilter from '../todo-filter/todo-filter';
import './todo-app.css';

const TodoApp = ({
    newText,
    handleInputOnChange,
    handleInputOnKeyPress,
    todos,
    handleDelete,
    handleToggleComplete,
    filter,
    handleChangeFilter,
    numberOfTodos,
    numberOfTodosLeft,
}) => (
    <div className="todo-app">
        <div className="wrapper">
            <p className="todo-title"> YOUR TODOS </p>
            <input
                type="text"
                className="todo-input"
                placeholder="New todo"
                value={newText}
                onChange={handleInputOnChange}
                onKeyPress={handleInputOnKeyPress}
            />
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleToggleComplete={handleToggleComplete}
            />
            <TodoFilter
                filter={filter}
                handleChangeFilter={handleChangeFilter}
            />
            <hr/>
            <p>{ numberOfTodosLeft + ' out of ' + numberOfTodos + ' left'}</p>
        </div>
    </div>
);

export default TodoApp
