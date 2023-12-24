import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './YourComponent.css'; // Import your CSS file

const ImageCollage = () => {
  return (
    <Container>
      <h2>Image Collage</h2>
      <Row className="image-collage">
        <Col xs={12} sm={6} md={4}>
          <img src="path/to/steel-image.jpg" alt="Steel" className="img-fluid" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <img src="path/to/metal-image.jpg" alt="Metal" className="img-fluid" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <img src="path/to/plastic-image.jpg" alt="Plastic" className="img-fluid" />
        </Col>
        {/* Add more image columns for additional categories */}
      </Row>
    </Container>
  );
};

export default ImageCollage;
