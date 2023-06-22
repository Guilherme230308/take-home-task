import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ErrorMessage.css'

interface ErrorMessageProps {
  onClose: () => void;
  errorMessageText: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ onClose, errorMessageText }) => {
  return (
    <Modal show={true} onHide={onClose} className="modal">
    <div className="custom-header">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>Atention!</Modal.Title>
      </Modal.Header>
    </div>
    <Modal.Body>
      <p>{errorMessageText}</p>
    </Modal.Body>
    <Modal.Footer className='modal-footer'>
      <Button className='close-button' variant="secondary" onClick={onClose} >
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  
  );
};

export default ErrorMessage;