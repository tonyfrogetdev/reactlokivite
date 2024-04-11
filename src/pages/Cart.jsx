import { Container, Table } from "react-bootstrap";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cartProducts } = useCart();

  return (
    <Container>
      <h1>Panier</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <th>{item.quantity}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
