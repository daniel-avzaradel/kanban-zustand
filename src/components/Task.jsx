import { useStore } from '../store';
import './Task.css';
import classNames from 'classnames';

const STATUS = 'PLANNED'

export default function Task({title}) {

    const task = useStore(store => store.tasks.find(task => task.title === title));
    const deleteTask = useStore(store => store.deleteTask)

    return (
        <div className="task">
            <div>{task.title}</div>
            <div className='bottomWrapper'>
                <div><button onClick={() => deleteTask(title)}>Delete</button></div>
                <div className={classNames('status', task.state)}>{task.state}</div>
            </div>
        </div>
    )
}
