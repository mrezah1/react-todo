import React, { useState, useEffect } from 'react'
import FromAdd from './FormAdd/FromAdd'
import FormFilter from './FormFilter/FormFIlter'
import Todos from './Todos/Todos'
import './Main.css'

const Main = (props) => {
    const [todosAll, setTodoAll] = useState([]);
    const [todosShow, setTodoShow] = useState([]);
    const [inputVal, setInputVal] = useState('');
    const [sortTodo, setSortTodo] = useState('All');
    const [filterTodo, setFilterTodo] = useState('All');

    const addTodo = (e) => {
        e.preventDefault()
        if (inputVal.trim() !== '') {
            const newState = [...todosAll];
            newState.push({
                id: Math.random() * 10,
                title: inputVal,
                isDone: false,
            });
            setTodoAll(newState);
            setInputVal('');
            localStorage.setItem('Todos', JSON.stringify(newState))
        }
    }
    const removeTodo = (id) => {
        let newState = [...todosAll].filter(item => item.id !== id);
        setTodoAll(newState);
        localStorage.setItem('Todos', JSON.stringify(newState))
    }
    const doneTodoHandler = (id) => {
        const newState = [...todosAll];
        const indexDoneTodo = newState.findIndex(item => item.id === id);
        newState[indexDoneTodo].isDone = !newState[indexDoneTodo].isDone;
        setTodoAll(newState)
        localStorage.setItem('Todos', JSON.stringify(newState))
    }
    const sortTodoHandler = () => {
        let newSort = [...todosShow];
        if (sortTodo === "Compelete")
            newSort = newSort.sort((a, b) => b.isDone - a.isDone);
        else if (sortTodo === "UnCompelete")
            newSort = newSort.sort((a, b) => a.isDone - b.isDone);
        setTodoShow(newSort)
    }
    const filterTodoHandler = () => {
        // default all todo
        let newFilter = [...todosAll];
        if (filterTodo === 'Compelete')
            newFilter = todosAll.filter(item => item.isDone === true)
        else if (filterTodo === 'UnCompelete')
            newFilter = todosAll.filter(item => item.isDone === false)
        setTodoShow(newFilter)
    }

    useEffect(() => {
        filterTodoHandler();
    }, [filterTodo, todosAll])

    useEffect(() => {
        sortTodoHandler()
    }, [sortTodo])

    useEffect(() => {
        const todoItems = localStorage.getItem('Todos')||'[]';
        // console.log(JSON.stringify(todoItems))
        setTodoAll(JSON.parse(todoItems))
    }, [])
    return (
        <section className="main">
            <FromAdd
                addTodo={addTodo}
                input={inputVal}
                change={(e) => setInputVal(e.target.value)}
            />
            {todosAll.length > 6 && (
                <FormFilter
                    sort={(e) => setSortTodo(e.target.value)}
                    filter={(e) => setFilterTodo(e.target.value)}
                />
            )}
            <Todos
                todos={todosShow}
                remove={removeTodo}
                done={doneTodoHandler}
            />
        </section>
    )
}
export default Main