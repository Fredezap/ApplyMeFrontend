import React, { useEffect, useState } from 'react'
import { backendErrorMessageProcessor } from '../../../molecules/messageManager/backendErrorMessageProcessor'
import { useMessageStore } from '../../../../store/slices/useMessageStore'
import postService from '../../../../services/post_services/postService'
import { useUserStore } from '../../../../store/slices/useUserStore'

const AdminPendingTasks = () => {
    const [pendingTasks, setPendingTasks] = useState([])
    const [gettingAllPendingTasks, setGettingAllPendingTasks] = useState(false)
    const { addMessage } = useMessageStore()
    const { user } = useUserStore()

    const getAllPendingTasks = async() => {
        setGettingAllPendingTasks(true)
        const url = '/admin/get-pending-tasks'
        const response = await postService(url, user)
        console.log(response)
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
        <div>
            <h3>Pedidos pendientes</h3>
            {gettingAllPendingTasks
                ? <p>Cargando tareas pendientes</p>
                : <div className='tasks-list'>
                    {pendingTasks.length === 0
                        ? (
                            <p>No hay pedidos pendientes</p>
                        )
                        : (
                            <div className='tasks-box'>
                                {pendingTasks.map((item, index) => (
                                    <ul key={index}>
                                        <li className='img-box'>
                                            {item.Images && item.Images.length > 0
                                                ? (
                                                    item.Images.map((img, imgIndex) => (
                                                        <div key={imgIndex}>
                                                            <img
                                                                src={img.url}
                                                                alt={img.name}
                                                                style={{ width: '100px', height: 'auto' }}
                                                            />
                                                        </div>
                                                    ))
                                                )
                                                : (
                                                    <p>No hay imagen para mostrar</p>
                                                )}
                                        </li>
                                        <li className='text-box'>
                                            <h4>{item.title}</h4>
                                            <p className='task-description'>{item.description}</p>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        )}
                </div>
            }
        </div>

    )
}

export default AdminPendingTasks