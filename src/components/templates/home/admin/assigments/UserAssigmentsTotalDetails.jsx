import { useState } from 'react'

export const UserAssigmentsTotalDetails = ({ user }) => {
    const [showTotalStatusDetails, setShowTotalStatusDetails] = useState(false)

    return (
        <div onClick={() => setShowTotalStatusDetails(!showTotalStatusDetails)} className={`total-assignments-by-user ${!showTotalStatusDetails ? 'details-hided' : ''}`}>
            {showTotalStatusDetails
                ? (
                    <div>
                        <div className='total'>
                            <h5>Total {user.TaskApplieds.length}</h5>
                        </div>
                        <div className='total-by-status'>
                            <p className='status-completed'>Completadas: {user.TaskApplieds.filter(task => task.status === 'completed').length}</p>
                            <p className='status-canceled'>Canceladas: {user.TaskApplieds.filter(task => task.status === 'canceled').length}</p>
                            <p className='status-in-progres'>En progreso: {user.TaskApplieds.filter(task => task.status === 'in-progres').length}</p>
                        </div>
                    </div>
                )
                : (
                    <div>
                        <p>Compromisos ({user.TaskApplieds.length})</p>
                    </div>
                )}
        </div>
    )
}