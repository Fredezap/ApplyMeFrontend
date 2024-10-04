import postService from '../../../../../services/post_services/postService'
import { useHandlePostResponse } from '../../../../../services/post_services/useHandlePostResponse'
import { useUserStore } from '../../../../../store/slices/useUserStore'
import { formatDate } from '../../../../../utilities/formatDate'
import { TaskDetail } from '../../common/task/TaskDetail'
import { TaskImage } from '../../common/task/TaskImage'

export const EmployeeAllPendingTasks = ({ gettingAllPendingTasks, pendingTasks, getAllPendingTasks }) => {
    const handleResponse = useHandlePostResponse()
    const { user } = useUserStore()

    const ApplyForATask = async(taskId) => {
        const values = { taskId, user }
        const response = await postService('/employee/apply-for-a-task', values)
        const success = handleResponse(response, 'Has aplicado correctamente al pedido')
        if (success) await getAllPendingTasks()
    }

    return (
        <div className="pending-tasks">
            <div className='task-main-title'>
                <h3>Pedidos disponibles</h3>
            </div>
            {gettingAllPendingTasks
                ? <p>Cargando pedidos disponibles...</p>
                : (
                    <div className='tasks-list'>
                        {pendingTasks.length === 0
                            ? <p className='no-pending-tasks'>No hay pedidos pendientes</p>
                            : (
                                <div className='tasks-box'>
                                    {pendingTasks.map((item, index) => (
                                        <div key={index} className='task-detail'>
                                            <ul>
                                                <TaskImage
                                                    images={item.Images}
                                                />
                                                <TaskDetail
                                                    task={item}
                                                />
                                                <li>
                                                    <button onClick={() => ApplyForATask(item.taskId)}>
                                                        Aplicar
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>
                )}
        </div>
    )
}