import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            toDoItems: []
        }
    }

    addItem = () => {
        if (this.state.input !== '') {
            this.setState(prevState => ({
                toDoItems: [...prevState.toDoItems, this.state.input]
            }));
        }
    }

    handleInputChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    renderItem(value) {
        return <ToDoItem value={this.state.input} />;
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInputChange} />
                <button className="add-item" onClick={this.addItem}>+</button>
                <ol className="to-do-list">
                    {
                        this.state.toDoItems.map(item => (
                            <ToDoItem value={item} />
                        ))
                    }
                </ol>
            </div>
        );
    }
}

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    handleClick = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    render() {
        return (
            <li className={this.state.isChecked ? "done" : ""}>
                <input type="checkbox"
                    onClick={this.handleClick}
                    checked={this.state.isChecked}
                />
                {this.props.value}
            </li>
        );
    }
}

ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
)