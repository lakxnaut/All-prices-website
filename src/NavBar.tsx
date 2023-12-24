
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/allprices.png'
import './NavBar.css'; // Create a separate CSS file for additional styling if needed

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src={logo}  // Replace with the path to your logo image
            height="30"
            className="d-inline-block align-top logo"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* CTA Button */}
        <Button variant="success" className="mr-3">
          For Free Demo, WhatsApp Us
        </Button>

        {/* YouTube Icon */}
        <Navbar.Text>
          <i className="fab fa-youtube mx-2"></i>
        </Navbar.Text>

        {/* Hamburger Menu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Add more Nav.Link components for additional navigation items */}
            <Nav.Link href="#" className="nav-link ml-auto">Home</Nav.Link>
            <Nav.Link href="#" className="nav-link ml-auto">About</Nav.Link>
            <Nav.Link href="#" className="nav-link ml-auto">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
