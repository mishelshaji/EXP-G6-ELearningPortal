import { Modal, Button } from 'react-bootstrap';

function ConfirmActionModal({ show, onClose, onConfirm, message }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          No
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmActionModal;