import React from 'react'
import { useUserStore } from '../../../store/slices/useUserStore'

const UserProfileDetails = () => {
    const { user, isUserEmpty } = useUserStore()

    return (
        <div className='template-center'>
            <div className='profile-details-box shadow-container'>
                <div>
                    <h5>Informacion del usario</h5>
                </div>
                <div className='profile-details'>
                    <p><span style={{ fontWeight: 'bold' }}>Nombre:</span> {user.name}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Apellido:</span> {user.surname}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Telefono:</span> {user.phone}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Email:</span> {user.email}</p>

                </div>
            </div>
        </div>
    )
}

export default UserProfileDetails