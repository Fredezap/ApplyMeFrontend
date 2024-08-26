import { useNavigate } from 'react-router-dom'
import postService from '../../../services/post_services/postService.js'
import { PATHS } from '../../../store/models/routes.js'
import useLoadingStore from '../../../store/slices/useLoadingStore.js'
import { useMessageStore } from '../../../store/slices/useMessageStore.js'
import { backendErrorMessageProcessor } from '../../molecules/messageManager/backendErrorMessageProcessor.js'
import { useUserStore } from '../../../store/slices/useUserStore.js'
import { initialValuesUser } from '../../../store/models/user.js'

export const useCheckUserPermissions = () => {
    const { setLoading } = useLoadingStore()
    const { addMessage } = useMessageStore()
    const { user, setUser, isUserEmpty } = useUserStore()
    const navigate = useNavigate()

    const checkUserPermissions = async() => {
        if (isUserEmpty()) {
            navigate(PATHS.AUTH.LOGIN)
            addMessage({ type: 'error', content: 'Please login' })
            return
        }

        setLoading(true)
        const url = '/auth/check-user-permissions'
        const userValues = { token: user.token, email: user.email, role: user.role, userId: user.userId }
        const response = await postService(url, userValues)
        setLoading(false)
        if (!response.success) {
            addMessage({ type: 'error', content: 'Please login' })
            navigate(PATHS.AUTH.LOGIN)
        }
    }

    return { checkUserPermissions }
}