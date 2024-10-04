import { Button, Modal } from 'react-bootstrap'
import WhiteButton from '../../../atoms/buttons/WhiteButton.jsx'
import { formatDate } from '../../../../utilities/formatDate.js'

export const TaskAppliedDetailModal = (
    {
        showTaskAppliedDetailModal,
        setShowTaskAppliedDetailModal,
        taskAppliedDetail
    }
) => {
    return (
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
                        <ul key={index} className={
                            `application-detail
                        ${applicationDetail.status === 'completed'
                            ? 'application-completed'
                            : applicationDetail.status === 'in-progres'
                                ? 'application-in-progres'
                                : 'application-canceled'}`}>

                            <li>
                                <span style={{ fontWeight: 'bold' }}>Fecha: </span>
                                {formatDate(applicationDetail.createdAt)}
                            </li>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Status: </span>
                                {applicationDetail.status}
                            </li>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Aplicante: </span>
                                {applicationDetail.User?.name} {applicationDetail.User?.surname}
                            </li>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Email: </span>
                                {applicationDetail.User?.email}
                            </li>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Telefono: </span>
                                {applicationDetail.User?.phone}
                            </li>
                            {applicationDetail.comments
                                ? (
                                    <li>
                                        <span style={{ fontWeight: 'bold' }}>Telefono: </span>
                                        {applicationDetail.comments}
                                    </li>
                                )
                                : (
                                    null
                                )}
                        </ul>
                    ))}
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => setShowTaskAppliedDetailModal(false)} variant='secondary'>
                    <p>Cerrar</p>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}