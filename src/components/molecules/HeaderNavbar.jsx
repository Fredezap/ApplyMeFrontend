import LargePrimaryButton from '../atoms/buttons/LargePrimaryButton'
import WhiteButton from '../atoms/buttons/WhiteButton'
import Logo from '../atoms/others/Logo'
import { PATHS } from '../../store/models/routes'
import { useUserStore } from '../../store/slices/useUserStore'
import { FaRegUserCircle } from 'react-icons/fa'
import { useMessageStore } from '../../store/slices/useMessageStore'
const HeaderNavbar = () => {
    const { isUserEmpty, resetUserValues } = useUserStore()
    const { addMessage } = useMessageStore()

    const logout = () => {
        resetUserValues()
        addMessage({ type: 'success', content: 'Sesion cerrada exitosamente' })
    }

    return (
        <div className='flex flex-row fixed top-0 left-0 h-24 bg-blue-900 w-full justify-between items-center px-10'>
            <Logo to={PATHS.HOME}/>
            {isUserEmpty()
                ? (
                    <div className='flex items-center justify-end space-x-4'>
                        <WhiteButton to={PATHS.AUTH.REGISTER}>Register</WhiteButton>
                        <LargePrimaryButton to={PATHS.AUTH.LOGIN}>Login</LargePrimaryButton>
                    </div>
                )
                : (
                    <div>
                        <div style={{ fontSize: '40px', color: 'white', cursor: 'pointer' }}>
                            <FaRegUserCircle />
                        </div>
                        <button onClick={logout}>Cerrar sesión</button>
                        <button>Mi perfil</button>
                    </div>
                )}

        </div>
    )
}

export default HeaderNavbar