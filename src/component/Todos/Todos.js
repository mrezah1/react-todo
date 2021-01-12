import Todo from './Todo/Todo'
import './Todos.css'

const Todos = ({todos,remove,done}) => (
    <ul className="todo-list">
        {todos.length > 0 ?
            todos.map((item, index) => (
                <Todo
                    key={item.id}
                    title={item.title}
                    isDone={item.isDone}
                    remove={() => remove(item.id)}
                    done={() => done(item.id)}
                />))
            : <li style={{ textAlign: 'center' }}>Empty Todo!</li>}
    </ul>
)

export default Todos