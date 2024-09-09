import React, { useEffect } from 'react'
import MessageManager from '../../molecules/messageManager/MessageManager'
import HeaderNavbar from '../../molecules/HeaderNavbar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { PATHS } from '../../../store/models/routes'
import Home from '../home/Home'
import LogInForm from '../auth/login/LoginForm'
import RegisterForm from '../auth/register/RegisterForm'
import OpenEmailModal from '../../molecules/modals/open-email-modal/OpenEmailModal'
import { useCheckUserPermissions } from './useCheckUserPermissions'
import isValidPath from './isValidPath'
import { useUserStore } from '../../../store/slices/useUserStore'
import AdminUsers from '../home/admin/AdminUsers'
import AdminPendingTasks from '../home/admin/AdminPendingTasks'

export const MainApp = () => {
    const { checkUserPermissions } = useCheckUserPermissions()
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname
    const { clearUser, user } = useUserStore()

    useEffect(() => {
        // clearUser()
        console.log('user: ', user)
        if (isValidPath(pathname, PATHS)) {
            // console.log('el path es valido')
            checkUserPermissions()
        } else {
            // console.log('el path no es valido')
            navigate(PATHS.HOME)
        }
    }, [])

    return (
        <div>
            <MessageManager />
            <HeaderNavbar />
            <Routes>
                <Route path={PATHS.HOME} element={<Home />} />
                <Route path={PATHS.AUTH.LOGIN} element={<LogInForm />} />
                <Route path={PATHS.AUTH.REGISTER} element={<RegisterForm />} />
                <Route path={PATHS.ADMIN.USERS} element={<AdminUsers />} />
                <Route path={PATHS.ADMIN.PENDING_TASKS} element={<AdminPendingTasks />} />
            </Routes>
            <OpenEmailModal />
        </div>
    )
}