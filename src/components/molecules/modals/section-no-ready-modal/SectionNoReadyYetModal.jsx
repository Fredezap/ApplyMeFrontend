import { Modal, Button } from 'react-bootstrap'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import useSectionNoReadyYetStore from '../../../../store/slices/useSectionNoReadyYetStore'

export const SectionNoReadyYetModal = () => {
    const { show, setShow } = useSectionNoReadyYetStore()

    return (
        <Modal
            className='task-applied-modal'
            size='l'
            show={show}
            onHide={setShow(false)}
        >
            <Modal.Header>
                <Modal.Title>
                    <h2>Lo sentimos</h2>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className='modal-succes-body chat-no-available'>
                <HiOutlineEmojiSad />
                <p>Seccion no habilidatada aun</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={setShow(false)} variant='secondary'>
                    <p>Cerrar</p>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}