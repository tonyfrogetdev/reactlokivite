import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/cart.css";

const Cart = ({ countCart }) => {
  return (
    <Container>
      <h1>Panier</h1>
      <Row className="row-style">
        <Col className="bordercol">Nom</Col>
        <Col className="bordercol">Prix</Col>
      </Row>
      {countCart.map((item, index) => (
        <Row key={index} className={index % 2 === 0 ? "secondRow" : "firstRow"}>
          <Col className="bordercol">{item.title}</Col>
          <Col className="bordercol">{item.price}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default Cart;
