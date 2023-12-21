// PopupModal.js

import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 30000); // Show modal after 30 seconds

    return () => clearTimeout(timeoutId); // Clear timeout if component unmounts
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission
    // You can access form data from the event.target
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      contactNumber: event.target.contactNumber.value,
    };

    console.log('Form submitted:', formData);
    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Fill the Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  );
};

export default PopupModal;
