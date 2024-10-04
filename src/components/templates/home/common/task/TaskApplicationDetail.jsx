import { useState } from 'react'
import { TaskAppliedDetailModal } from '../../../../molecules/modals/task-applied-detail-modals/TaskAppliedDetailModal'

const TaskApplicationDetail = ({ taskApplieds }) => {
    const [showTaskAppliedDetailModal, setShowTaskAppliedDetailModal] = useState(false)
    const [taskAppliedDetail, settaskAppliedDetail] = useState(null)

    const openAplicationDetailModal = (taskApplied) => {
        setShowTaskAppliedDetailModal(!showTaskAppliedDetailModal)
        settaskAppliedDetail(taskApplied)
    }

    return (
        <div>
            <li>
                <button onClick={() => openAplicationDetailModal(taskApplieds)}>
                        Aplicaiton detail
                </button>
            </li>

            <TaskAppliedDetailModal
                showTaskAppliedDetailModal={showTaskAppliedDetailModal}
                setShowTaskAppliedDetailModal={setShowTaskAppliedDetailModal}
                taskAppliedDetail={taskAppliedDetail}
            />
        </div>
    )
}

export default TaskApplicationDetail