import LargePrimaryButton from '../../atoms/buttons/LargePrimaryButton'
import WhiteButton from '../../atoms/buttons/WhiteButton'
import Logo from '../../atoms/others/Logo'
import { PATHS } from '../../../store/models/routes'
import { useUserStore } from '../../../store/slices/useUserStore'
import { HeaderDropdownMenu } from './HeaderDropdownMenu'
import { AdminIcons } from './AdminIcons'

export const HeaderNavbar = () => {
    const { isUserEmpty, isUserAdmin } = useUserStore()

    return (
        <div className='custom-navbar flex flex-row fixed top-0 left-0 h-24 w-full justify-between items-center px-10 z-50'>
            <Logo to={PATHS.HOME} />
            {isUserEmpty()
                ? (
                    <div className='flex items-center justify-end space-x-4'>
                        <WhiteButton to={PATHS.AUTH.REGISTER}>Register</WhiteButton>
                        <LargePrimaryButton to={PATHS.AUTH.LOGIN}>Login</LargePrimaryButton>
                    </div>
                )
                : (
                    <>
                        <div className='main-navbar-button-paths'>
                            {isUserAdmin() && (
                                <AdminIcons />
                            )}
                        </div>
                        <HeaderDropdownMenu />
                    </>
                )}
        </div>
    )
}