import { Button, Modal } from 'react-bootstrap'
import { formatDate } from '../../../../utilities/formatDate.js'
import { useState } from 'react'
import { ExpandImageModal } from './ExpandImageModal.jsx'

export const TaskDetailModal = (
    {
        showTaskDetailModal,
        setShowTaskDetailModal,
        taskDetail
    }
) => {
    const [showExpandImageModal, setShowExpandImageModal] = useState(false)
    const [imageToExpand, setImageToExpand] = useState(null)

    const showExpandedImage = (image) => {
        setImageToExpand(image)
        setShowExpandImageModal(!showExpandImageModal)
    }

    return (
        <div>
            <Modal
                className='task-applied-modal'
                size='l'
                show={showTaskDetailModal}
                onHide={() => setShowTaskDetailModal(false)}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h2>Detalles del pedido</h2>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal-succes-body'>
                    {taskDetail?.length === 0
                        ? (
                            <p className='task-detail-modal'>No hay detalles de este pedido</p>
                        )
                        : taskDetail?.map((info, index) => (
                            <ul key={index}>
                                <div>
                                    <h5>Informacion del autor</h5>
                                    <li>
                                        <span style={{ fontWeight: 'bold' }}>Autor: </span>
                                        {info.User?.name} {info.User?.surname}
                                    </li>
                                    <li>
                                        <span style={{ fontWeight: 'bold' }}>Email: </span>
                                        {info.User?.email}
                                    </li>
                                    <li>
                                        <span style={{ fontWeight: 'bold' }}>Telefono: </span>
                                        {info.User?.phone}
                                    </li>
                                </div>
                                <div>
                                    <h5>Informacion del pedido</h5>
                                    <li>
                                        <span style={{ fontWeight: 'bold' }}>Fecha: </span>
                                        {formatDate(info.createdAt)}
                                    </li>
                                    <li>
                                        <span style={{ fontWeight: 'bold' }}>Descripcion: </span>
                                        {info.description}
                                    </li>
                                </div>
                                {info.Images.length > 0 && (
                                    <div>
                                        <Button variant='outline-light' onClick={() => showExpandedImage(info.Images)}>Ver imagen</Button>
                                    </div>
                                )}
                            </ul>
                        ))}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => setShowTaskDetailModal(false)} variant='secondary'>
                        <p>Cerrar</p>
                    </Button>
                </Modal.Footer>
            </Modal>
            <ExpandImageModal
                imageToExpand={imageToExpand}
                showExpandImageModal={showExpandImageModal}
                setShowExpandImageModal={setShowExpandImageModal}
            />
        </div>
    )
}