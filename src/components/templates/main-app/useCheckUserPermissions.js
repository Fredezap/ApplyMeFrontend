import { useNavigate } from 'react-router-dom'
import postService from '../../../services/post_services/postService.js'
import { PATHS } from '../../../store/models/routes.js'
import useLoadingStore from '../../../store/slices/useLoadingStore.js'
import { useMessageStore } from '../../../store/slices/useMessageStore.js'
import { useUserStore } from '../../../store/slices/useUserStore.js'

export const useCheckUserPermissions = () => {
    const { setLoading } = useLoadingStore()
    const { addMessage } = useMessageStore()
    const { user, setUser, clearUser, isUserEmpty } = useUserStore()
    const navigate = useNavigate()

    const checkUserPermissions = async() => {
        if (isUserEmpty()) {
            clearUser()
            navigate(PATHS.HOME)
            return
        }

        setLoading(true)
        const url = '/auth/check-user-permissions'
        const response = await postService(url, user)
        setLoading(false)

        if (!response.success) {
            clearUser()
            addMessage({ type: 'error', content: 'Please login' })
            navigate(PATHS.AUTH.LOGIN)
            return
        }
        setUser(response.data.user)
    }

    return { checkUserPermissions }
}