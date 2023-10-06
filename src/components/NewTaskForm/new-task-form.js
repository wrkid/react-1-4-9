import React from "react";

import './new-task-form.css'

const NewTaskForm = () => {
    return (
        <header>
            <h1>todos</h1>
            <input className="new-todo" 
                    placeholder="What needs to be done?"
                    autoFocus/>
        </header>
    );
}

export default NewTaskForm;