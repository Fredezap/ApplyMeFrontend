import { useState } from 'react'
import { UserAssigmentContactDetails } from './UserAssigmentContactDetails'
import { UserAssigmentsTotalDetails } from './UserAssigmentsTotalDetails'
import { AssigmentDetails } from './AssigmentDetails'

export const AllTasksAppliedByUserDetail = ({ allTasksAppliedByUser }) => {
    const [showDetails, setShowDetails] = useState({})

    const toggleDetails = (userId) => {
        setShowDetails((prevDetails) => ({
            ...prevDetails,
            [userId]: !prevDetails[userId]
        }))
    }

    return (
        <div>
            {allTasksAppliedByUser.map((user, index) => (
                <div key={user.userId}>
                    <div className='admin-assigned-task-user-name' onClick={() => toggleDetails(user.userId)} style={{ cursor: 'pointer' }}>
                        <p>{user.name} {user.surname}</p>
                    </div>
                    {showDetails[user.userId] && (
                        <div>
                            <div className='main-info'>
                                <UserAssigmentContactDetails user={user}/>
                                <UserAssigmentsTotalDetails user={user} />
                            </div>
                            {user.TaskApplieds.length === 0
                                ? (
                                    <p>Este empleado aun no ha aplicado a ningún pedido</p>
                                )
                                : (
                                    <AssigmentDetails user={user}/>
                                )}
                        </div>

                    )}
                </div>
            ))}
        </div>
    )
}