import { Button, Modal } from 'react-bootstrap'
import { TaskImageExpanded } from '../../../templates/home/common/task/TaskImageExpanded'

export const ExpandImageModal = ({
    showExpandImageModal,
    setShowExpandImageModal,
    imageToExpand
}) => {
    console.log('imageToExpand en modal: ', imageToExpand)
    return (
        <Modal
            className='task-applied-modal'
            size='xl'
            show={showExpandImageModal}
            onHide={() => setShowExpandImageModal(false)}
        >

            <Modal.Body className='modal-succes-body'>
                <TaskImageExpanded imageToExpand={imageToExpand}/>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => setShowExpandImageModal(false)} variant='secondary'>
                    <p>Cerrar</p>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}