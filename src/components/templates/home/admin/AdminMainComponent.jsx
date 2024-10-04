import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../store/models/routes'
import { FaUser } from 'react-icons/fa'
import { GiSandsOfTime } from 'react-icons/gi'
import { MdAssignment } from 'react-icons/md'

export const AdminMainComponent = () => {
    const navigate = useNavigate()

    const navitgateTo = (url) => {
        navigate(url)
    }

    return (
        <div className='template-center'>
            <div className='main-admin'>
                <div className='card' onClick={() => navitgateTo(PATHS.ADMIN.USERS)}>
                    <FaUser/>
                    <h5>Usuarios</h5>
                </div>
                <div className='card' onClick={() => navitgateTo(PATHS.ADMIN.PENDING_TASKS)}>
                    <GiSandsOfTime/>
                    <h5>Pendientes</h5>
                </div>
                <div className='card' onClick={() => navitgateTo(PATHS.ADMIN.ASSIGNMENTS)}>
                    <MdAssignment/>
                    <h5>Encargos</h5>
                </div>
            </div>
        </div>
    )
}