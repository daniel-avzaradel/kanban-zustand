import './Column.css';
import Task from './Task';
import { useStore } from '../store.js';


const Column = ({state}) => {

    const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));
    const addTask = useStore((store) => store.addTask)

    return (
        <div className='column'>
            <div className='titleWrapper'>
                <p>{state}</p>
                <button onClick={() => addTask('asdasdas', state)}>Add</button>
            </div>
            {tasks.map((task, i) => <Task title={task.title} key={task.title + i} />)}
        </div>
    )
}

export default Column
