import React, { useEffect, useState } from 'react'
import { backendErrorMessageProcessor } from '../../../../molecules/messageManager/backendErrorMessageProcessor'
import { useMessageStore } from '../../../../../store/slices/useMessageStore'
import postService from '../../../../../services/post_services/postService'
import { useUserStore } from '../../../../../store/slices/useUserStore'
import { PendingTasksDetail } from './PendingTasksDetail'

export const AdminPendingTasks = () => {
    const [pendingTasks, setPendingTasks] = useState([])
    const [gettingAllPendingTasks, setGettingAllPendingTasks] = useState(false)
    const { addMessage } = useMessageStore()
    const { user } = useUserStore()

    const getAllPendingTasks = async() => {
        setGettingAllPendingTasks(true)
        const url = '/admin/get-pending-tasks'
        const response = await postService(url, user)
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })
            return
        }
        setPendingTasks(response.data.tasks)
        setGettingAllPendingTasks(false)
    }

    useEffect(() => {
        getAllPendingTasks()
    }, [])

    return (
        <div className='template'>
            <div className="pending-tasks shadow-container">
                <div className='task-main-title'>
                    <h3>Pedidos disponibles</h3>
                </div>
                {gettingAllPendingTasks
                    ? (
                        <p>Cargando pedidos pendientes</p>
                    )
                    : (
                        <PendingTasksDetail pendingTasks={pendingTasks}/>
                    )
                }
            </div>

        </div>
    )
}