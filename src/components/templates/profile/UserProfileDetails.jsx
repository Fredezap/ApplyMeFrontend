import React from 'react'
import { useUserStore } from '../../../store/slices/useUserStore'

const UserProfileDetails = () => {
    const { user, isUserEmpty } = useUserStore()

    return (
        <div>
            <p><span style={{ fontWeight: 'bold' }}>Nombre:</span> {user.name}</p>
            <p><span style={{ fontWeight: 'bold' }}>Apellido:</span> {user.surname}</p>
            <p><span style={{ fontWeight: 'bold' }}>Telefono:</span> {user.phone}</p>
            <p><span style={{ fontWeight: 'bold' }}>Email:</span> {user.email}</p>
        </div>
    )
}

export default UserProfileDetails