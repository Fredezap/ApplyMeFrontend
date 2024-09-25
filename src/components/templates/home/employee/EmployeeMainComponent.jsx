import React, { useEffect, useState } from 'react'
import EmployeePendingTasks from './EmployeePendingTasks'
import { EmployeeAppliedTasks } from './EmployeeAppliedTasks'
import { backendErrorMessageProcessor } from '../../../molecules/messageManager/backendErrorMessageProcessor'
import postService from '../../../../services/post_services/postService'
import { useUserStore } from '../../../../store/slices/useUserStore'
import { useMessageStore } from '../../../../store/slices/useMessageStore'

const EmployeeMainComponent = () => {
    const [pendingTasks, setPendingTasks] = useState([])
    const [gettingAllPendingTasks, setGettingAllPendingTasks] = useState(false)
    const { addMessage } = useMessageStore()
    const {
        user,
        setUser,
        isUserTasksEmpty,
        getUserTasksAppliedInProgres,
        getUserTasksAppliedCompleted,
        getUserTasksAppliedCanceled
    } = useUserStore()

    const getAllPendingTasks = async() => {
        setGettingAllPendingTasks(true)
        try {
            const response = await postService('/employee/get-pending-tasks', user)

            if (!response.success) {
                const errors = backendErrorMessageProcessor(response.errors)
                addMessage({ type: 'error', content: errors })
                setGettingAllPendingTasks(false)
                return
            }

            setPendingTasks(response.data.tasks)
            setGettingAllPendingTasks(false)
        } catch (error) {
            addMessage({ type: 'error', content: 'Error al cargar las tareas pendientes' })
            setGettingAllPendingTasks(false)
        }
    }

    const handlePostResponse = async(response, successMessage) => {
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })
            return false
        }

        addMessage({ type: 'success', content: successMessage })
        setUser(response.data.user)
        return true
    }

    const ApplyForATask = async(taskId) => {
        const values = { taskId, user }
        const response = await postService('/employee/apply-for-a-task', values)
        const success = await handlePostResponse(response, 'Has aplicado correctamente al pedido')
        if (success) await getAllPendingTasks()
    }

    const finishTask = async(taskAppliedId) => {
        const values = { taskAppliedId, user }
        const response = await postService('/employee/complete-task', values)
        const success = await handlePostResponse(response, 'Has completado correctamente el pedido')
        if (success) await getAllPendingTasks()
    }

    const unapplyTask = async(taskAppliedId) => {
        console.log('llamo a unapply')
        const values = { taskAppliedId, user }
        const response = await postService('/employee/unapply-task', values)
        const success = await handlePostResponse(response, 'Has cancelado correctamente el pedido')
        if (success) await getAllPendingTasks()
    }

    useEffect(() => {
        getAllPendingTasks()
    }, [])

    return (
        <div>
            <EmployeePendingTasks
                gettingAllPendingTasks={gettingAllPendingTasks}
                pendingTasks={pendingTasks}
                ApplyForATask={ApplyForATask}
            />
            <EmployeeAppliedTasks
                unapplyTask={unapplyTask}
                finishTask={finishTask}
                isUserTasksEmpty={isUserTasksEmpty}
                getUserTasksAppliedCompleted={getUserTasksAppliedCompleted}
                getUserTasksAppliedCanceled={getUserTasksAppliedCanceled}
                getUserTasksAppliedInProgres={getUserTasksAppliedInProgres}
                user={user}
            />
        </div>
    )
}

export default EmployeeMainComponent