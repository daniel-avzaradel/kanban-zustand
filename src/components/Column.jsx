import './Column.css';
import Task from './Task';
import { useStore } from '../store.js';


const Column = ({state}) => {

    const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));

    return (
        <div className='column'>
            <p>{state}</p>
            {tasks.map((task, i) => <Task title={task.title} key={task.title + i} />)}
        </div>
    )
}

export default Column
