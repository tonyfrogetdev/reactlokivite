import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import "../assets/styles/header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to="/" className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto gap-2" navbarScroll>
              <NavLink to="/" className="nav-link">
                Accueil
              </NavLink>
              <NavLink to="/a-propos" className="nav-link">
                à Propos
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
