import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ErrorMessageProps {
  onClose: () => void;
  errorMessageText: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ onClose, errorMessageText }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{errorMessageText}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorMessage;