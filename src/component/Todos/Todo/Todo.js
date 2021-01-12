import './Todo.css'

const Todo = ({title,remove,done,isDone}) => (
    <li className={`todo ${isDone ? 'passive' : 'active'}`}>
        {isDone ?
            <s>{title}</s> : <span>{title}</span>
        }
        <div>
            <button onClick={remove}>×</button>
            <button onClick={done}>✓</button>
        </div>
    </li>
)
export default Todo