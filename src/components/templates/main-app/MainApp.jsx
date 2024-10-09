import { useEffect } from 'react'
import MessageManager from '../../molecules/messageManager/MessageManager'
import { HeaderNavbar } from '../../molecules/Navbar/HeaderNavbar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { PATHS } from '../../../store/models/routes'
import Home from '../home/Home'
import LogInForm from '../auth/login/LoginForm'
import RegisterForm from '../auth/register/RegisterForm'
import OpenEmailModal from '../../molecules/modals/open-email-modal/OpenEmailModal'
import { useCheckUserPermissions } from './useCheckUserPermissions'
import isValidPath from './isValidPath'
import AdminUsers from '../home/admin/users/AdminUsers'
import { AdminPendingTasks } from '../home/admin/pendings/AdminPendingTasks'
import UserProfileDetails from '../profile/UserProfileDetails'
import { AdminAssigments } from '../home/admin/assigments/AdminAssigments'
import { Footer } from '../../molecules/modals/Footer/footer'

export const MainApp = () => {
    const { checkUserPermissions } = useCheckUserPermissions()
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname

    useEffect(() => {
        if (isValidPath(pathname, PATHS)) {
            // if path is login or register not need to check user permitions
            if (pathname === PATHS.AUTH.LOGIN || pathname === PATHS.AUTH.REGISTER) return
            // console.log('el path es valido')
            checkUserPermissions()
        } else {
            // console.log('el path no es valido')
            navigate(PATHS.HOME)
        }
    }, [])

    return (
        <div className='main-app'>
            <MessageManager />
            <HeaderNavbar />
            <Routes>
                <Route path={PATHS.HOME} element={<Home />} />
                <Route path={PATHS.AUTH.LOGIN} element={<LogInForm />} />
                <Route path={PATHS.AUTH.REGISTER} element={<RegisterForm />} />
                <Route path={PATHS.ADMIN.USERS} element={<AdminUsers />} />
                <Route path={PATHS.ADMIN.PENDING_TASKS} element={<AdminPendingTasks />} />
                <Route path={PATHS.ADMIN.ASSIGNMENTS} element={<AdminAssigments />} />
                <Route path={PATHS.USER.PROFILE} element={<UserProfileDetails />} />
            </Routes>
            <OpenEmailModal />
            <Footer />
        </div>
    )
}