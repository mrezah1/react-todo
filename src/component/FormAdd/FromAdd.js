import './FromAdd.css'

const FromAdd = (props) => (
    <form onSubmit={props.addTodo} id="formTodo">
        <input
            value={props.input}
            onChange={props.change}
            type="text"
            placeholder="Enter Todo..." />
        <button type="submit">✚</button>
    </form>
)

export default FromAdd