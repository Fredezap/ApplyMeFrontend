import { useUserStore } from '../../../../store/slices/useUserStore'
import { TaskImage } from '../common/task/TaskImage'
import { TaskDetail } from '../common/task/TaskDetail'
import TaskApplicationDetail from '../common/task/TaskApplicationDetail'

const UserMainComponent = () => {
    const { isUserTasksEmpty, getUserTasks } = useUserStore()

    return (
        <div className="pending-tasks">
            <h3>Tus pedidos</h3>
            <div className='tasks-list'>
                {isUserTasksEmpty()
                    ? (
                        <p>No hay pedidos creados</p>
                    )
                    : (
                        <div className='tasks-box'>
                            {getUserTasks().map((item, index) => (
                                <div key={index} className='task-detail'>
                                    <ul>
                                        <TaskImage
                                            images={item.Images}
                                        />
                                        <TaskDetail
                                            task={item}
                                        />
                                        <TaskApplicationDetail
                                            taskApplieds={item.TaskApplieds}
                                        />
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default UserMainComponent