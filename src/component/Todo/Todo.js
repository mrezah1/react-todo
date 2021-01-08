import './Todo.css'

const Todo = (props) => (
    <li className="todo">
        {props.isDone ?
            <s>{props.title}</s> :<span>{props.title}</span>
        }
        <div>
            <button onClick={props.remove}>×</button>
            <button onClick={props.done}>✓</button>
        </div>
    </li>
)
export default Todo