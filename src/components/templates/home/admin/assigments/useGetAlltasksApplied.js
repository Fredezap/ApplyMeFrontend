import postService from '../../../../../services/post_services/postService'
import { useMessageStore } from '../../../../../store/slices/useMessageStore'
import { useUserStore } from '../../../../../store/slices/useUserStore'
import { backendErrorMessageProcessor } from '../../../../molecules/messageManager/backendErrorMessageProcessor'

export const useGetAlltasksApplied = () => {
    const { addMessage } = useMessageStore()
    const { user } = useUserStore()

    const getAllTasksApplied = async({ setAllTasksAppliedByUser, setGettingAllTasksApplied }) => {
        setGettingAllTasksApplied(true)

        try {
            const response = await postService('/admin/get-all-tasks-applied', user)
            console.log('response', response)
            if (!response.success) {
                const errors = backendErrorMessageProcessor(response.errors)
                addMessage({ type: 'error', content: errors })
                setGettingAllTasksApplied(false)
                return
            }

            setAllTasksAppliedByUser(response.data.allTasksApplied)
            setGettingAllTasksApplied(false)
        } catch (error) {
            addMessage({ type: 'error', content: 'Error al cargar las tareas asignadas' })
            setGettingAllTasksApplied(false)
        }
    }

    return getAllTasksApplied
}