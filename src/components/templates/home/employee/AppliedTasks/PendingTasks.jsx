import { useUserStore } from '../../../../../store/slices/useUserStore.js'
import postService from '../../../../../services/post_services/postService.js'
import { useHandlePostResponse } from '../../../../../services/post_services/useHandlePostResponse.js'
import { EmployeeTasksManager } from './EmployeeTasksManager'

export const PendingTasks = ({ getAllPendingTasks }) => {
    const { getEmployeeTasksAppliedInProgres, user } = useUserStore()
    const handleResponse = useHandlePostResponse()

    const finishTask = async(taskAppliedId) => {
        const values = { taskAppliedId, user }
        const response = await postService('/employee/complete-task', values)
        const success = handleResponse(response, 'Has completado correctamente el pedido')
        if (success) await getAllPendingTasks()
    }

    const unapplyTask = async(taskAppliedId) => {
        console.log('llamo a unapply')
        const values = { taskAppliedId, user }
        const response = await postService('/employee/unapply-task', values)
        const success = handleResponse(response, 'Has cancelado correctamente el pedido')
        if (success) await getAllPendingTasks()
    }

    return (
        <div>
            <h4>Pendientes</h4>
            {getEmployeeTasksAppliedInProgres().length === 0
                ? (<p>No tienes compromisos pendientes</p>)
                : (
                    <EmployeeTasksManager
                        TaskApplieds={getEmployeeTasksAppliedInProgres()}
                        status={'in-progres'}
                        finishTask={finishTask}
                        unapplyTask={unapplyTask}
                    />
                )}
        </div>
    )
}