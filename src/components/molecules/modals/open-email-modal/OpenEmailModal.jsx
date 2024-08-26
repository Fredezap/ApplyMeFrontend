import { Button, Modal } from 'react-bootstrap'
import WhiteButton from '../../../atoms/buttons/WhiteButton.jsx'
import { useMessageStore } from '../../../../store/slices/useMessageStore.js'
import openEmailWindow from './openEmailWindow.js'
import useOpenEmailModalStore from '../../../../store/slices/useOpenEmailModalStore.js'

const OpenEmailModal = () => {
    const { addMessage } = useMessageStore()
    const { showOpenEmailModal, setShowOpenEmailModal, modalData, email } = useOpenEmailModalStore()

    return (
        <Modal
            className='modal-success'
            size='xl'
            show={showOpenEmailModal}
            onHide={() => setShowOpenEmailModal(false)}
        >
            <Modal.Header>
                <Modal.Title>
                    {modalData?.title}
                    <h2></h2>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className='modal-succes-body'>
                {modalData?.body}
                <p></p>
                <div
                    className='white-button-box'
                    onClick={() => openEmailWindow(email, addMessage)}
                >
                    <WhiteButton type='button' variant='secondary'>
                        <p>Abrir email</p>
                    </WhiteButton>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => setShowOpenEmailModal(false)} variant='secondary'>
                    <p>Cerrar</p>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default OpenEmailModal