import Dropdown from 'react-bootstrap/Dropdown'
import { FaRegUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../store/models/routes.js'
import { useUserStore } from '../../../store/slices/useUserStore.js'
import useTaskStore from '../../../store/slices/useTaskStore.js'
import { useMessageStore } from '../../../store/slices/useMessageStore.js'

export const HeaderDropdownMenu = () => {
    const { clearUser } = useUserStore()
    const { addMessage } = useMessageStore()
    const { clearTask } = useTaskStore()
    const navigate = useNavigate()

    const logout = () => {
        clearUser()
        clearTask()
        addMessage({ type: 'success', content: 'Has cerrado sesión correctamente' })
        navigate(PATHS.HOME)
    }

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                <FaRegUserCircle/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate(PATHS.USER.PROFILE)}>Mi perfil</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}