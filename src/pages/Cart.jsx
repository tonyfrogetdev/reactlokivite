import { Container, Table } from "react-bootstrap";

const Cart = ({ countCart }) => {
  return (
    <Container>
      <h1>Panier</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {countCart.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
