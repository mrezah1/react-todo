import React, { useState } from 'react'
import FromAdd from './FormAdd/FromAdd'
import Todo from './Todo/Todo'
import './Main.css'

const Main = (props) => {
    const [todos, setTodo] = useState([]);
    const [inputVal, setInputVal] = useState('');

    const changeValHandler = (event) => {
        setInputVal(event.target.value)
    }
    const addTodo = (e) => {
        e.preventDefault()
        if (inputVal.trim() !== '') {
            const newState = [...todos];
            newState.push({
                title: inputVal,
                isDone: false
            });
            setTodo(newState);
            setInputVal('');
        }
    }
    const removeTodo = (id) => {
        const newState = [...todos];
        newState.splice(id, 1);
        setTodo(newState);
    }
    const doneTodoHandler = (id) => {
        const newState = [...todos];
        newState[id].isDone = !newState[id].isDone;
        setTodo(newState);
    }
    return (
        <section className="main">
            <div className="wrapper-form">
                <FromAdd
                    addTodo={addTodo}
                    input={inputVal}
                    change={changeValHandler}
                />
            </div>
            <ul className="wrapper-todo">
                {todos.length > 0 ?
                    todos.map((item, index) => (
                        <Todo
                            key={index}
                            title={item.title}
                            isDone={item.isDone}
                            remove={() => removeTodo(index)}
                            done={() => doneTodoHandler(index)}
                        />))
                    : <li style={{ textAlign: 'center' }}>Empty Todo!</li>}
            </ul>
        </section>
    )
}
export default Main