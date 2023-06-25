import './Column.css';
import Task from './Task';
import { myStore } from '../store.js';
import { useMemo } from 'react';

const Column = ({state}) => {

    const tasks = myStore((store) => store.tasks);

    const filtered  = useMemo(() => tasks.filter((task) => task.state === state))

    return (
        <div className='column'>
            <p>{state}</p>
            <Task title='Todo'/>
        </div>
    )
}

export default Column
