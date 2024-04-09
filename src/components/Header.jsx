import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import "../assets/styles/header.css";
import { NavLink } from "react-router-dom";
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
            <Nav className="ms-auto gap-2" navbarScroll>
              <NavLink to="/" className="nav-link" activeClassName="active">
                Accueil
              </NavLink>
              <NavLink
                to="/a-propos"
                className="nav-link"
                activeClassName="active"
              >
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
