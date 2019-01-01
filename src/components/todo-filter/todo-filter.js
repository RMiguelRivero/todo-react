import React from 'react';
import { filters } from '../../constants/filters';
import './todo-filter.css';

const TodoFilter = ({ filter, handleChangeFilter }) => (
    <ul className="todo-filter--list">
        <li
            className={filters.SHOW_ALL === filter ? 'active' : ''}
            onClick={() => handleChangeFilter(filters.SHOW_ALL)}
        >All</li>
        <li
            className={filters.SHOW_ACTIVE === filter ? 'active' : ''}
            onClick={() => handleChangeFilter(filters.SHOW_ACTIVE)}
        >Active</li>
        <li
            className={filters.SHOW_COMPLETED === filter ? 'active' : ''}
            onClick={() => handleChangeFilter(filters.SHOW_COMPLETED)}
        >Completed</li>
    </ul>
);

export default TodoFilter
