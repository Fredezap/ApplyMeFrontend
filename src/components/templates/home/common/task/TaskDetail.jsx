export const TaskDetail = ({ task }) => {
    return (
        <li className='text-box'>
            <p className='task-description'>{task?.description}</p>
        </li>
    )
}