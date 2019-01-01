import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({
    todos,
    handleDelete,
    handleToggleComplete
}) => (
    <ul className="todo-list">
        {
            todos.map(
                (todo) => TodoListItem({
                    ...todo,
                    handleDelete,
                    handleToggleComplete,
                })
            )
        }
    </ul>
);

export default TodoList;
