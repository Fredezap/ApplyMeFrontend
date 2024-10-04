import { backendErrorMessageProcessor } from '../../components/molecules/messageManager/backendErrorMessageProcessor'
import { useMessageStore } from '../../store/slices/useMessageStore'
import { useUserStore } from '../../store/slices/useUserStore'

export const useHandlePostResponse = () => {
    const { addMessage } = useMessageStore()
    const { setUser } = useUserStore()

    const handleResponse = (response, successMessage) => {
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })
            return false
        }

        addMessage({ type: 'success', content: successMessage })
        setUser(response.data.user)
        return true
    }

    return handleResponse
}