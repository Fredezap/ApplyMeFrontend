import { useState } from 'react'
import { TaskDetailModal } from '../../../../molecules/modals/task-detail/TaskDetailModal'
import { TaskImage } from '../../common/task/TaskImage'

export const PendingTasksDetail = ({ pendingTasks }) => {
    const [showTaskDetailModal, setShowTaskDetailModal] = useState(false)
    const [taskDetail, setTaskDetail] = useState(null)

    const showTaskDetail = (task) => {
        setTaskDetail([task])
        setShowTaskDetailModal(!showTaskDetailModal)
    }

    return (
        <div className='tasks-list'>
            {pendingTasks?.length === 0
                ? <p className='no-pending-tasks'>No hay pedidos pendientes</p>
                : (
                    <div className='tasks-box'>
                        {pendingTasks?.map((item, index) => (
                            <div key={index} className='task-detail' onClick={() => showTaskDetail(item)}>
                                <ul>
                                    <li>
                                        <TaskImage
                                            images={item.Images}
                                        />
                                    </li>
                                    <li>
                                        <h4>{item?.title}</h4>
                                        <p style={{ textAlign: 'center' }}>
                                            <span style={{ fontWeight: '600' }}>Autor: </span>
                                            {item.User.name} {item.User.surname}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            <TaskDetailModal
                showTaskDetailModal={showTaskDetailModal}
                setShowTaskDetailModal={setShowTaskDetailModal}
                taskDetail={taskDetail}
            />
        </div>
    )
}