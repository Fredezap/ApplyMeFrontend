import Dropdown from 'react-bootstrap/Dropdown'
import { FaRegUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../store/models/routes.js'
import { useUserStore } from '../../store/slices/useUserStore'
import useTaskStore from '../../store/slices/useTaskStore'
import { useMessageStore } from '../../store/slices/useMessageStore'

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

    const prueba = () => {
        navigate(PATHS.USER.PROFILE)
        console.log('aca en prueba')
    }
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaRegUserCircle/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={prueba}>Mi perfil</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}