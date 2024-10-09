import { formatDate } from '../../../../../utilities/formatDate'

export const TaskDetail = ({ task }) => {
    return (
        <div className='task-detail-box'>
            <li className='text-box'>
                <div className='task-detail-title'>
                    <h4>{task?.title}</h4>
                    <p>{formatDate(task.createdAt)}</p>
                </div>
                <div className='task-detail-description'>
                    <p>{task?.description}</p>
                </div>
            </li>
        </div>
    )
}