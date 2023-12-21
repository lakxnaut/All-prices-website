// CategorySection.js

import React, { useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategorySection.css'; // Create a separate CSS file for additional styling if needed

const CategorySection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          <Button variant="light" size="lg" onClick={handleButtonClick}>PLASTIC</Button>
          <Button variant="light" size="lg" onClick={handleButtonClick}>PLASTIC</Button>
          <Button variant="light" size="lg" onClick={handleButtonClick}>METAL</Button>
          <Button variant="light" size="lg" onClick={handleButtonClick}>STEEL</Button>
          <Button variant="light" size="lg" onClick={handleButtonClick}>ABS</Button>
          <Button variant="light" size="lg" onClick={handleButtonClick}>LD</Button>
          <Button variant="light" size="lg" onClick={handleButtonClick}>MD</Button>
          <Button variant="light" size="lg" onClick={handleButtonClick}>POLYESTER</Button>
          <Button variant="light" size="lg" onClick={handleButtonClick}>PET</Button>
          {/* Add more buttons for additional categories */}
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
