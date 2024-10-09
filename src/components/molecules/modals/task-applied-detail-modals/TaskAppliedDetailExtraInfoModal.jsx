import { Button, Modal } from 'react-bootstrap'
import { SectionNoReadyYetModal } from '../section-no-ready-modal/SectionNoReadyYetModal'
import useSectionNoReadyYetStore from '../../../../store/slices/useSectionNoReadyYetStore'

export const TaskAppliedDetailExtraInfoModal = ({
    showTaskAppliedDetailExtraInfoModal,
    setShowTaskAppliedDetailExtraInfoModal,
    taskSelectedForExtraInfo
}) => {
    const { show, setShow } = useSectionNoReadyYetStore()

    return (
        <div>
            <Modal
                className='task-applied-modal'
                size='l'
                show={showTaskAppliedDetailExtraInfoModal}
                onHide={() => setShowTaskAppliedDetailExtraInfoModal(false)}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h2>Informacion extra</h2>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal-succes-body'>
                    {taskSelectedForExtraInfo?.length === 0
                        ? (<p className='task-detail-modal'>No hay informacion extra para mostrar</p>)
                        : taskSelectedForExtraInfo?.map((applicationDetail, index) => (
                            <ul key={index} className='extra-info-main'>
                                <div className='extra-info-child comments-and-status'>
                                    <li>
                                        <span style={{ fontWeight: 'bold' }}>Status: </span>
                                        {applicationDetail.status === 'in-progres'
                                            ? 'En progreso'
                                            : applicationDetail.status === 'completed'
                                                ? 'Finalizado'
                                                : applicationDetail.status === 'canceled'
                                                    ? 'Cancelado'
                                                    : 'Estado desconocido'}
                                    </li>
                                    <li>
                                        <span style={{ fontWeight: 'bold' }}>Comentarios </span>
                                        {applicationDetail.comments
                                            ? (<p>{applicationDetail.comments}</p>)
                                            : (<p>Aun no se han hecho comentarios sobre este pedido</p>)
                                        }
                                    </li>
                                </div>
                                <div className='extra-info-child applicant-contact-info'>
                                    <h5>Datos de contacto del aplicante</h5>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>Email: </span>
                                        {applicationDetail.User?.email}
                                    </p>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>Telefono: </span>
                                        {applicationDetail.User?.phone}
                                    </p>
                                    <Button onClick={setShow(!show)} variant='outline-light'>Chatear con el aplicante</Button>
                                </div>
                            </ul>
                        ))}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => setShowTaskAppliedDetailExtraInfoModal(false)} variant='secondary'>
                        <p>Cerrar</p>
                    </Button>
                </Modal.Footer>
            </Modal>
            <SectionNoReadyYetModal />
        </div>
    )
}