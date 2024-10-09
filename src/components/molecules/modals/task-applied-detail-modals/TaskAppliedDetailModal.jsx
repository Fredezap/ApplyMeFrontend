import { Button, Modal } from 'react-bootstrap'
import { formatDate } from '../../../../utilities/formatDate.js'
import { useState } from 'react'
import { TaskAppliedDetailExtraInfoModal } from './TaskAppliedDetailExtraInfoModal.jsx'

export const TaskAppliedDetailModal = (
    {
        showTaskAppliedDetailModal,
        setShowTaskAppliedDetailModal,
        taskAppliedDetail
    }
) => {
    const [showTaskAppliedDetailExtraInfoModal, setShowTaskAppliedDetailExtraInfoModal] = useState(false)
    const [taskSelectedForExtraInfo, setTaskSelectedForExtraInfo] = useState([])
    console.log('taskAppliedDetail_ ', taskAppliedDetail)

    const handleShowExtraInfoModal = (taskApplicationDetail) => {
        setTaskSelectedForExtraInfo([taskApplicationDetail])
        setShowTaskAppliedDetailExtraInfoModal(!showTaskAppliedDetailExtraInfoModal)
    }

    return (
        <div>
            <Modal
                className='task-applied-modal'
                size='l'
                show={showTaskAppliedDetailModal}
                onHide={() => setShowTaskAppliedDetailModal(false)}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h2>Application detail</h2>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal-succes-body'>
                    {taskAppliedDetail?.length === 0
                        ? (
                            <p className='task-detail-modal'>Nadie a aplicado a tu pedido aun</p>
                        )
                        : taskAppliedDetail?.map((applicationDetail, index) => (
                            <ul key={index}
                                onClick={() => handleShowExtraInfoModal(applicationDetail)}
                                className= { `application-detail-main-box 
                                ${applicationDetail.status === 'completed'
                                ? 'application-completed'
                                : applicationDetail.status === 'in-progres'
                                    ? 'application-in-progres'
                                    : 'application-canceled'}`}
                            >
                                <li>
                                    <span style={{ fontWeight: 'bold' }}>Fecha: </span>
                                    {formatDate(applicationDetail.createdAt)}
                                </li>
                                <li>
                                    <span style={{ fontWeight: 'bold' }}>Aplicante: </span>
                                    {applicationDetail.User?.name} {applicationDetail.User?.surname}
                                </li>
                            </ul>
                        ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowTaskAppliedDetailModal(false)} variant='secondary'>
                        <p>Cerrar</p>
                    </Button>
                </Modal.Footer>
            </Modal>
            <TaskAppliedDetailExtraInfoModal
                showTaskAppliedDetailExtraInfoModal={showTaskAppliedDetailExtraInfoModal}
                setShowTaskAppliedDetailExtraInfoModal={setShowTaskAppliedDetailExtraInfoModal}
                taskSelectedForExtraInfo={taskSelectedForExtraInfo}
            />
        </div>
    )
}