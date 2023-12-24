import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterSection.css';

const FooterSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: (event.target as any).formName.value,
      email: (event.target as any).formEmail.value,
      message: (event.target as any).formMessage.value,
    };

    // Add your form submission logic here using formData
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="footer-section bg-dark text-white">
      <Container>
        <h2>Contact Us</h2>
        <p>Provide your basic information below, and we'll get in touch with you.</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Your Email" required />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your Message" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </footer>
  );
};

export default FooterSection;
