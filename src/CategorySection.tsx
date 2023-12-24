import  { useState, FormEvent } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategorySection.css';

const CategorySection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: (event.target as any).name.value,
      email: (event.target as any).email.value,
      contactNumber: (event.target as any).contactNumber.value,
    };

    console.log('Form submitted:', formData);

    // Set formSubmitted to true to trigger the thank you message
    setFormSubmitted(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormSubmitted(false); // Reset formSubmitted when the modal is closed
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

  const handleButtonClick = (category: string) => {
    console.log(category);
    setShowModal(true);
  };

  return (
    <section className="category-section bg-orange">
      <Container>
        <div className="category-buttons">
          <Button className="category-button" variant="light" size="lg" onClick={() => handleButtonClick('PLASTIC')}>
            PLASTIC
          </Button>
          {/* Other category buttons... */}
        </div>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{formSubmitted ? 'Thank You!' : 'Download App'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{renderFormContent()}</Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default CategorySection;
