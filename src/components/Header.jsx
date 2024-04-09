import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import "../assets/styles/header.css";
const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto" navbarScroll>
              <Nav.Link
                href="/"
                className="text-black fw-semibold text-decoration-underline"
              >
                Accueil
              </Nav.Link>
              <Nav.Link href="#">à Propos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
