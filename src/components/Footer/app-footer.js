import React from "react";
import TasksFilter from '../TasksFilter'

import './app-footer.css'

const AppFooter = () => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TasksFilter />
            <button className = "clear-completed">Clear completed</button>
        </footer>
    );
};

export default AppFooter;