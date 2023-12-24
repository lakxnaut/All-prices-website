import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PopupModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 30000); // Show modal after 30 seconds

    return () => clearTimeout(timeoutId); // Clear timeout if component unmounts
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      name: (event.target as any).elements.name.value,
      email: (event.target as any).elements.email.value,
      contactNumber: (event.target as any).elements.contactNumber.value,
    };

    console.log('Form submitted:', formData);

    setFormSubmitted(true);
  };

  const renderFormContent = () => {
    if (formSubmitted) {
      return (
        <div>
          <p>Thank you for submitting the form!</p>
          <p>For further assistance, contact us on WhatsApp:</p>
          <Button variant="success" onClick={handleCloseModal}>
            Open WhatsApp
          </Button>
        </div>
      );
    }

    return (
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" required />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your Email" required />
        </Form.Group>

        <Form.Group controlId="contactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="tel" placeholder="Your Contact Number" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{formSubmitted ? 'Thank You!' : 'Fill the Form'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderFormContent()}</Modal.Body>
    </Modal>
  );
};

export default PopupModal;
