import { useState } from 'react'
import { formatDate } from '../../../../../utilities/formatDate'
import { AuthorDetailsModal } from '../../../../molecules/modals/author-details-modal/AuthorDetailsModal'
import { Button } from 'react-bootstrap'
import { AssigmentStatusDetail } from './AssigmentStatusDetail'

export const AssigmentDetails = ({ user }) => {
    const [authorDetails, setAuthorDetails] = useState(null)
    const [showAuthorDetailsModal, setShowAuthorDetailsModal] = useState(false)

    const showAutorDetails = (author) => {
        setAuthorDetails(author)
        setShowAuthorDetailsModal(!showAuthorDetailsModal)
    }

    return (
        <div>
            {user.TaskApplieds.map((taskApplied, taskAppliedIndex) => (
                <div>
                    <div className={`admin-assigned-task-detail border-${taskApplied.status}`} key={taskApplied.taskAppliedId} style={{ marginTop: '20px' }}>
                        <h5>{taskApplied.Task.title}</h5>
                        <p className='description'>{taskApplied.Task.description}</p>
                        <div className='date'>
                            <p>Fecha:{formatDate(taskApplied.createdAt)}</p>
                        </div>
                        <div className='more-data'>
                            <div onClick={() => showAutorDetails(taskApplied.Task.User)}>
                                <Button variant="info">Autor</Button>
                            </div>
                            <AssigmentStatusDetail taskApplied={taskApplied}/>
                        </div>
                    </div>
                </div>
            ))}
            <AuthorDetailsModal
                showAuthorDetailsModal={showAuthorDetailsModal}
                setShowAuthorDetailsModal={setShowAuthorDetailsModal}
                author={authorDetails}
            />
        </div>
    )
}