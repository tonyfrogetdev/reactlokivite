import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="bg-secondary
     py-4"
    >
      <Container>
        <span className="d-flex justify-content-center text-white">
          « Copyright Mexican Food 2024 ».
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
