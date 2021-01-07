import React from 'react'
import FromAdd from './FormAdd/FromAdd'
import Todo from './Todo/Todo'
import './Main.css'

class Main extends React.Component {
    state = {
        todos: [],
        inputVal: '',
    }
    addTodo = (e) => {
        e.preventDefault()
        if (this.state.inputVal.trim() !== '') {
            const newState = [...this.state.todos];
            newState.push(this.state.inputVal);
            this.setState({ inputVal: '', todos: newState })
        }
    }
    removeTodo = (id) => {
        const newState = [...this.state.todos];
        newState.splice(id, 1);
        this.setState({ todos: newState })
    }
    changeValHandler = (event) => {
        this.setState({ inputVal: event.target.value })
    }
    render() {
        return (
            <section className="main">
                <div className="wrapper-form">
                    <FromAdd
                        addTodo={this.addTodo}
                        input={this.state.inputVal}
                        change={this.changeValHandler}
                    />
                </div>
                <ul className="wrapper-todo">
                    {this.state.todos.length > 0 ?
                        this.state.todos.map((item, index) => (
                            <Todo title={item} key={index} removeTodo={() => this.removeTodo(index)} />
                        ))
                        : <p style={{textAlign:'center'}}>Empty Todo!</p>}
                </ul>
            </section>
        )
    }
}

export default Main