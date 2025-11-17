import { Component } from "react";
import todo from './todo.png'

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            inputValue: ""
        };
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    addTask = () => {
        const { inputValue, tasks } = this.state;

        if (inputValue.trim() === "") return;

        this.setState({
            tasks: [...tasks, inputValue],
            inputValue: ""
        });
    };

    removeTask = (index) => {
        this.setState({ tasks: this.state.tasks.filter((item, i) => i !== index) });
      };

    render() {
        const { tasks, inputValue } = this.state;

        return ( 
        <div className = "todo-container">

            <div className = "todo-card">
                <h1 className = "todo-title"> Todo List </h1>

                <div className = "todo-input-row">
                    <input 
                        type = "text" 
                        value = { inputValue }
                        onChange = { this.handleInputChange}
                        className = "todo-input"
                        placeholder = "New task..." />
            
                    <button 
                        className = "todo-add-btn"
                        onClick = { this.addTask}>
                        ADD 
                    </button> 
                </div>

                <ul className = "todo-list"> 
                    {tasks.map((task, index) => ( 
                    <li key = {index}
                        className = "todo-item">

                        <img className="todo-icon" src={todo} width='30px' alt="check-box" />
                        <span className = "todo-text"> 
                            {task} </span> 
                        <button className = "todo-delete-btn" 
                            onClick = {() => this.removeTask(index)} >
                            DELETE 
                        </button> 
                    </li>
                ))
            } 
                </ul> 
            </div>
        </div>
    );
}
}

export default TodoList;