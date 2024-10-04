import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { GiSandsOfTime } from 'react-icons/gi'
import { MdAssignment } from 'react-icons/md'
import { PATHS } from '../../../store/models/routes.js'

export const AdminIcons = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='button-path' onClick={() => navigate(PATHS.ADMIN.USERS)}>
                <FaUser />
                <h4>Usuarios</h4>
            </div>
            <div className='button-path'onClick={() => navigate(PATHS.ADMIN.PENDING_TASKS)}>
                <GiSandsOfTime />
                <h4>Pendientes</h4>
            </div>
            <div className='button-path' onClick={() => navigate(PATHS.ADMIN.ASSIGNMENTS)}>
                <MdAssignment />
                <h4>Encargos</h4>
            </div>
        </>
    )
}