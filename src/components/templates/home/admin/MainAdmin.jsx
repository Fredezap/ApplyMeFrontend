import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../store/models/routes'

const MainAdmin = () => {
    const navigate = useNavigate()

    const navitgateTo = (url) => {
        navigate(url)
    }

    return (
        <div className='template'>
            <div className='main-admin'>
                <h1>El usuario es Admin</h1>
                <button onClick={() => navitgateTo(PATHS.ADMIN.USERS)}>Usuarios</button>
                <button onClick={() => navitgateTo(PATHS.ADMIN.PENDING_TASKS)}>Pendientes</button>
                <button onClick={() => navitgateTo(PATHS.ADMIN.ASSIGNMENTS)}>Encargos</button>
            </div>
        </div>
    )
}

export default MainAdmin