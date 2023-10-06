import {React, Component} from "react";

import './task.css'

export default class Task extends Component {

    state = {
        done: this.props.status === 'completed' ? true : false,
        editing: this.props.status === 'editing' ? true : false,
    }

    checkboxHandler = () => {
        this.setState(state => {
            return {
                done: !this.state.done 
            }; 
        });
    };

    editingHandler = () => { // /!TODO !!!!
        this.setState(state => {
            return {
                done: this.state.done === true ? false : false,
                editing: !this.state.editing
            };
        });
    };

    render () {
        let { status, description, createdTime, onDeleted } = this.props;

        const { done, editing } = this.state;

        if (done) {
            status = 'completed';
        } else if (editing) {
            status = 'editing'
        }else {
            status = 'active';
        }


        return (
            <li className={status}>
                <div className="view">
                    <input className="toggle" 
                            type="checkbox"
                            checked={done ? true : false} 
                            onChange={this.checkboxHandler}/>
                    <label>
                        <span className="description">{ description }</span>
                        <span className="created">{ createdTime }</span>
                    </label>
                    <button className="icon icon-edit"
                            onClick={this.editingHandler}></button>
                    <button className="icon icon-destroy"
                            onClick={onDeleted}></button>
                </div>
                <input type="text" className="edit" defaultValue="Editing task" />
            </li>
        );
    }
}
