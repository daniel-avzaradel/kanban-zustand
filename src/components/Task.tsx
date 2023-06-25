import './Task.css';
import classNames from 'classNames'

const STATUS = 'PLANNED'

export default function Task({title}: any) {
    return <div className="task">
        <div>{title}</div>
        <div className='bottomWrapper'>
            <div></div>
            <div className={classNames('status', STATUS)}>{STATUS}</div>
        </div>
        </div>
}