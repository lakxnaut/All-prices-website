// HeroSection.js

import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css'; // Create a separate CSS file for additional styling if needed

const HeroSection = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-orange text-white text-center">
      <Container className="highlight-section">
        <h1 className="display-4">Get All India Scrap / New Prices</h1>
        <h1 className="display-4">जानिए स्क्रैप वा नया माल का रेट (रोज ताजा भाव)</h1>
        <h2 className="lead">
        We provide metals + steel + plastic + paper + gatta LIVE Rates In 30 min daily (24×7)Service
        </h2>

        <h2 className="lead">
        जानिए Metal + steel के ताजा भाव 30 मिनट में कोई छुट्टी नहीं (24×7)सर्विस
        </h2>

      </Container>
    </div>
  );
};

export default HeroSection;
