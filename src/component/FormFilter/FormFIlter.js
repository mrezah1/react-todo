import './FormFilter.css'

const FormFilter = ({ sort, filter }) => (
    <form className="form-filter">
        <select onChange={filter}>
            <optgroup label="Filter">
                <option value="All">All</option>
                <option value="Compelete">Compelete</option>
                <option value="UnCompelete">UnCompelete</option>
            </optgroup>
        </select>
            <select onChange={sort}>
                <optgroup label="Sort">
                    <option value="Compelete">Compelete</option>
                    <option value="UnCompelete">UnCompelete</option>
                </optgroup>
            </select>
    </form >
)

export default FormFilter