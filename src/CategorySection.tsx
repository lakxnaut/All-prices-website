// CategorySection.js

import React, { useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategorySection.css'; // Create a separate CSS file for additional styling if needed

const CategorySection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
 
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      contactNumber: event.target.contactNumber.value,
    };

    console.log('Form submitted:', formData);

    // Set formSubmitted to true to trigger the thank you message
    setFormSubmitted(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
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
  }


  const handleButtonClick = () => {
    setShowModal(true);
  };

 

  const handleDownloadRequest = (event) => {
    event.preventDefault();
    // Handle download request logic here
    handleCloseModal();
  };

  return (
    <section className="category-section bg-orange">
      <Container>
        <div className="category-buttons">
        <Button className="category-button" variant="light" size="lg" onClick={() => handleButtonClick('PLASTIC')}>
          PLASTIC
        </Button>
        <Button className="category-button alternate" variant="light" size="lg" onClick={() => handleButtonClick('METAL')}>
          METAL
        </Button>
        <Button className="category-button" variant="light" size="lg" onClick={() => handleButtonClick('STEEL')}>
          STEEL
        </Button>
        <Button className="category-button alternate" variant="light" size="lg" onClick={() => handleButtonClick('ABS')}>
          ABS
        </Button>
        <Button className="category-button" variant="light" size="lg" onClick={() => handleButtonClick('LD')}>
          LD
        </Button>
        <Button className="category-button alternate" variant="light" size="lg" onClick={() => handleButtonClick('MD')}>
          MD
        </Button>
        <Button className="category-button" variant="light" size="lg" onClick={() => handleButtonClick('POLYESTER')}>
          POLYESTER
        </Button>
        <Button className="category-button alternate" variant="light" size="lg" onClick={() => handleButtonClick('PET')}>
          PET
        </Button>
        </div>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Download App</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleDownloadRequest}>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Request Download
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default CategorySection;
