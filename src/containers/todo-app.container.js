import React, { Component } from 'react';
import TodoApp from '../components/todo-app/todo-app';
// import TodoList from '../components/todo-list/todo-list';
// import TodoFilter from '../components/todo-filter/todo-filter';
import { filters } from '../constants/filters';
import { keys } from '../constants/keys';
import '../components/todo-app/todo-app.css';

import * as uuidv4 from 'uuid';

class TodoAppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                    id: uuidv4(),
                    text: 'learn react',
                    completed: true
                },
                {
                    id: uuidv4(),
                    text: 'learn redux',
                    completed: false
                },
            ],
            filter: filters.SHOW_ALL,
            newText: '',
        };
        this.handleDelete = this.deleteTodo.bind(this);
        this.handleAdd = this.addTodo.bind(this);
        this.handleToggleComplete = this.toggleComplete.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
        this.handleInputOnChange = this.handleInputOnChange.bind(this);
        this.handleInputOnKeyPress = this.handleInputOnKeyPress.bind(this);
    }

    toggleComplete(id) {
        const todos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos });
    }

    deleteTodo(id) {
        const todos = this.state.todos.filter((todo) => todo.id !== id);
        this.setState({ todos });
    }

    handleInputOnChange(event) {
        this.setState({ newText: event.target.value });
    }

    handleInputOnKeyPress(event) {
        if (event.key === keys.ENTER) {
            this.addTodo(this.state.newText);
        }
    }

    addTodo(text) {
        if (text.trim().length === 0) return;
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuidv4(),
                    text,
                    completed: false
                }
            ],
            newText: '',
        });
    }

    handleChangeFilter(filter) {
        this.setState({ filter });
    }

    render() {
        let { filter, newText, todos: filteredTodos } = this.state;
        const numberOfTodos = filteredTodos.length;
        const numberOfTodosLeft = filteredTodos.filter((todo) => !todo.completed).length;

        if (this.state.filter === filters.SHOW_COMPLETED) {
            filteredTodos = filteredTodos.filter((todo) => todo.completed)
        } else if (this.state.filter === filters.SHOW_ACTIVE) {
            filteredTodos = filteredTodos.filter((todo) => !todo.completed)
        }

        const props = {
            newText,
            handleInputOnChange: this.handleInputOnChange,
            handleInputOnKeyPress: this.handleInputOnKeyPress,
            todos: filteredTodos,
            handleDelete: this.handleDelete,
            handleToggleComplete: this.handleToggleComplete,
            filter,
            handleChangeFilter: this.handleChangeFilter,
            numberOfTodos,
            numberOfTodosLeft,
        };

        return (
            <TodoApp {...props}/>
        );
    }
}

export default TodoAppContainer;
