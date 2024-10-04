import { useState } from 'react'

export const UserAssigmentContactDetails = ({ user }) => {
    const [showContactDetails, setShowContactDetails] = useState(false)
    return (
        <div
            onClick={() => setShowContactDetails(!showContactDetails)}
            className={`contact-detail ${!showContactDetails ? 'details-hided' : ''}`}
        >
            {showContactDetails
                ? (
                    <div>
                        <p>
                            <span style={{ fontWeight: '550' }}>Email: </span>
                            {user.email}
                        </p>
                        <p>
                            <span style={{ fontWeight: '550' }}>Teléfono: </span>
                            {user.phone}
                        </p>
                    </div>
                )
                : (
                    <div>
                        <p>Mostrar detalles de contacto</p>
                    </div>
                )}
        </div>
    )
}