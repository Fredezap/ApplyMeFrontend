import { useEffect, useState } from 'react'
import { EmployeeAllPendingTasks } from './AllPendingTasks/EmployeeAllPendingTasks'
import { EmployeeAppliedTasks } from './AppliedTasks/EmployeeAppliedTasks'
import { backendErrorMessageProcessor } from '../../../molecules/messageManager/backendErrorMessageProcessor'
import postService from '../../../../services/post_services/postService'
import { useUserStore } from '../../../../store/slices/useUserStore'
import { useMessageStore } from '../../../../store/slices/useMessageStore'

const EmployeeMainComponent = () => {
    const [pendingTasks, setPendingTasks] = useState([])
    const [gettingAllPendingTasks, setGettingAllPendingTasks] = useState(false)
    const { addMessage } = useMessageStore()
    const { user } = useUserStore()

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
            console.log('PENDING TASKS: ', response.data.tasks)
            setPendingTasks(response.data.tasks)
            setGettingAllPendingTasks(false)
        } catch (error) {
            addMessage({ type: 'error', content: 'Error al cargar las tareas pendientes' })
            setGettingAllPendingTasks(false)
        }
    }

    useEffect(() => {
        getAllPendingTasks()
    }, [])

    return (
        <div>
            <EmployeeAllPendingTasks
                gettingAllPendingTasks={gettingAllPendingTasks}
                getAllPendingTasks={getAllPendingTasks}
                pendingTasks={pendingTasks}
            />
            <EmployeeAppliedTasks getAllPendingTasks={getAllPendingTasks}/>
        </div>
    )
}

export default EmployeeMainComponent