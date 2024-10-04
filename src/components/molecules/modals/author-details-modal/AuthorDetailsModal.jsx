import { Button, Modal } from 'react-bootstrap'

export const AuthorDetailsModal = (
    {
        showAuthorDetailsModal,
        setShowAuthorDetailsModal,
        author
    }
) => {
    console.log('author: ', author)
    return (
        <Modal
            className='task-applied-modal'
            size='l'
            show={showAuthorDetailsModal}
            onHide={() => setShowAuthorDetailsModal(false)}
        >
            <Modal.Header>
                <Modal.Title>
                    <h2>Detalles del autor</h2>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className='modal-succes-body'>
                {author === null
                    ? (
                        <p className='task-detail-modal'>No se han encontrado los detalles del autor</p>
                    )
                    : (
                        <ul>
                            <li>Nombre: {author?.name ? author.name : null} {author?.surname ? author.surname : null}</li>
                            <li>Email: {author?.email ? author.email : null}</li>
                            <li>Telefono: {author?.phone ? author.phone : null}</li>
                        </ul>
                    )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setShowAuthorDetailsModal(false)} variant='secondary'>
                    <p>Cerrar</p>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}