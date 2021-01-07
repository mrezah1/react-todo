import './Todo.css'

const Todo = (props) => (
    <li className="todo">
        {props.title}
        <button onClick={props.removeTodo}>×</button>
    </li>
)
export default Todo