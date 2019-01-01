import React from 'react';
import PropTypes from 'prop-types';
import IconElement from '../icon-element/icon-element';
import './todo-list-item.css';

const TodoListItem = ({
    id,
    text,
    completed,
    handleToggleComplete,
    handleDelete,
}) => (
    <li key={id} className={completed ? 'todo todo-completed' : 'todo'}>
        <input
            type="checkbox"
            checked={completed}
            onChange={() => handleToggleComplete(id)}
        />
        <div className="text">{text}</div>
        <IconElement icon="close-x" handleClick={() => handleDelete(id)} />
    </li>
);

TodoListItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    handleToggleComplete: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
