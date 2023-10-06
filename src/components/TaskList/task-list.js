import React from "react";
import Task from '../Task'

import './task-list.css'

const TodoList = ({ todos, onDeleted }) => {
    const todoList = todos.map(todo => {

        const {id, ...meta} = todo;

        return (
                <Task key = { id } { ...meta } onDeleted = {() => onDeleted(id)}/>
        );
    });

    return (
        <ul className="todo-list">
            { todoList }
        </ul>
    );
}

export default TodoList;