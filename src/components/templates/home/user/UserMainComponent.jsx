import { useUserStore } from '../../../../store/slices/useUserStore'
import { TaskImage } from '../common/task/TaskImage'
import { TaskDetail } from '../common/task/TaskDetail'
import { useState } from 'react'
import { TaskAppliedDetailModal } from '../../../molecules/modals/task-applied-detail-modals/TaskAppliedDetailModal'

const UserMainComponent = () => {
    const { isUserTasksEmpty, getUserTasks } = useUserStore()
    const [showPendingTasks, setShowPendingTasks] = useState(false)

    const [showTaskAppliedDetailModal, setShowTaskAppliedDetailModal] = useState(false)
    const [taskAppliedDetail, settaskAppliedDetail] = useState(null)

    const openAplicationDetailModal = (taskApplied) => {
        setShowTaskAppliedDetailModal(!showTaskAppliedDetailModal)
        settaskAppliedDetail(taskApplied)
    }

    return (
        <div className="pending-tasks">

            <button onClick={() => setShowPendingTasks(!showPendingTasks)} className='shadow-container'>
                {!showPendingTasks
                    ? (
                        <p>Mostrar pedidos</p>
                    )
                    : (
                        <p>Ocultar pedidos</p>
                    )}
            </button>
            <div className={`tasks-list ${showPendingTasks ? 'show' : ''}`}>
                {showPendingTasks && (
                    isUserTasksEmpty()
                        ? (
                            <p>No hay pedidos creados</p>
                        )
                        : (
                            <div className='tasks-box'>
                                {getUserTasks().map((item, index) => (
                                    <div key={index} className='task-detail' onClick={() => openAplicationDetailModal(item.TaskApplieds)}>
                                        <ul>
                                            <TaskImage
                                                images={item.Images}
                                            />
                                            <TaskDetail
                                                task={item}
                                            />
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )
                )}
            </div>
            <TaskAppliedDetailModal
                showTaskAppliedDetailModal={showTaskAppliedDetailModal}
                setShowTaskAppliedDetailModal={setShowTaskAppliedDetailModal}
                taskAppliedDetail={taskAppliedDetail}
            />
        </div>
    )
}

export default UserMainComponent