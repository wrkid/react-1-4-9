import {React, Component} from "react";
import NewTaskForm from "../NewTaskForm";
import AppMain from "../app-main";

import './app.css'

export default class App extends Component {

    state = {
        todosData : [
            {
                id: '1',
                status: 'completed',
                description: 'drink coffee',
                createdTime: 'created 17 seconds ago'
            },
            {
                id: '2',
                status: 'active',
                description: 'dew app',
                createdTime: 'created 5 minutes ago'
            },
            {
                id: '3',
                status: 'active',
                description: 'do a training set',
                createdTime: 'created 5 minutes ago'
            },
            {
                id: '4',
                status: 'active',
                description: 'read a todos list',
                createdTime: 'created 5 minutes ago'
            }
        ]
    }


    deleteTask = (id) => {
        this.setState(({ todosData }) => {
            const idx = todosData.findIndex(el => el.id === id);
            const newArray = [
                ...todosData.slice(0, idx),
                ...todosData.slice(idx + 1)
            ];
            return {
                todosData: newArray
            }
        })
    }

    render () {
        return (
            <section className = 'todoapp'>
                <NewTaskForm />
                <AppMain todos = {this.state.todosData}
                        onDeleted={this.deleteTask}/>
            </section>
        );
    }
}