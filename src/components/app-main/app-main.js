import React from "react";
import TaskList from "../TaskList";
import AppFooter from '../Footer'

const AppMain = ({ todos, onDeleted }) => {
    return (
        <section className="main">
            <TaskList todos = { todos }
                    onDeleted = { (id) => onDeleted(id)}/>
            <AppFooter />
        </section>
    );
}

export default AppMain;