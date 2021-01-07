import React, { useState } from 'react'
import FromAdd from './FormAdd/FromAdd'
import Todo from './Todo/Todo'
import './Main.css'

const Main = (props) => {
    const [todoSt, setTodo] = useState({
        todos: [],
        inputVal: ''
    })
    const addTodo = (e) => {
        e.preventDefault()
        if (todoSt.inputVal.trim() !== '') {
            const newState = { ...todoSt };
            newState.todos.push(todoSt.inputVal);
            newState.inputVal = "";
            setTodo({ ...todoSt, ...newState });
        }
    }
    const removeTodo = (id) => {
        const newState = [...todoSt.todos];
        newState.splice(id, 1);
        setTodo({ ...todoSt, todos: newState })
    }
    const changeValHandler = (event) => {
        // this.setState({ inputVal: event.target.value })
        setTodo({ ...todoSt, inputVal: event.target.value })
    }

    return (
        <section className="main">
            <div className="wrapper-form">
                <FromAdd
                    addTodo={addTodo}
                    input={todoSt.inputVal}
                    change={changeValHandler}
                />
            </div>
            <ul className="wrapper-todo">
                {todoSt.todos.length > 0 ?
                    todoSt.todos.map((item, index) => (
                        <Todo title={item}
                            key={index}
                            removeTodo={() => removeTodo(index)}
                        />))
                    : <p style={{ textAlign: 'center' }}>Empty Todo!</p>}
            </ul>
        </section>
    )
}
export default Main