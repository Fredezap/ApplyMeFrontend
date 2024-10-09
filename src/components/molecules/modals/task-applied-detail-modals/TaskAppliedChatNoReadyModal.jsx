import { Modal, Button } from 'react-bootstrap'
import { HiOutlineEmojiSad } from 'react-icons/hi'

export const TaskAppliedChatNoReadyModal = ({
    showTaskAppliedChatNoReadyModal,
    setShowTaskAppliedChatNoReadyModal
}) => {
    return (
        <Modal
            className='task-applied-modal'
            size='l'
            show={showTaskAppliedChatNoReadyModal}
            onHide={() => setShowTaskAppliedChatNoReadyModal(false)}
        >
            <Modal.Header>
                <Modal.Title>
                    <h2>Informacion extra</h2>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className='modal-succes-body chat-no-available'>
                <HiOutlineEmojiSad />
                <p>Seccion no habilidatada aun</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => setShowTaskAppliedChatNoReadyModal(false)} variant='secondary'>
                    <p>Cerrar</p>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}