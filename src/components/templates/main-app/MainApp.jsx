import React, { useEffect } from 'react'
import MessageManager from '../../molecules/messageManager/MessageManager'
import HeaderNavbar from '../../molecules/HeaderNavbar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { PATHS } from '../../../store/models/routes'
import Home from '../Home'
import LogInForm from '../auth/login/LoginForm'
import RegisterForm from '../auth/register/RegisterForm'
import OpenEmailModal from '../../molecules/modals/open-email-modal/OpenEmailModal'
import { useCheckUserPermissions } from './useCheckUserPermissions'
import isValidPath from './isValidPath'
import { useUserStore } from '../../../store/slices/useUserStore'

export const MainApp = () => {
    const { user, isUserEmpty } = useUserStore()
    const { checkUserPermissions } = useCheckUserPermissions()
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname

    useEffect(() => {
        if (isValidPath(pathname, PATHS)) {
            checkUserPermissions()
        } else {
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
            </Routes>
            <OpenEmailModal />
        </div>
    )
}