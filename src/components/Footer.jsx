import { Container } from "react-bootstrap";
import "../assets/styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <span className="d-flex justify-content-center text-white">
          « Copyright Mexican Food 2024 ».
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
