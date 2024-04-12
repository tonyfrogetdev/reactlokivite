import { Container, Table } from "react-bootstrap";
import { useCart } from "../utils/context/CartContext";
import { useCartTotalAmount } from "../utils/hooks/CartTotalAmount";
import { useCartTotalItems } from "../utils/hooks/CartTotalItems";
import { Helmet } from "react-helmet";
const Cart = () => {
  const { cartProducts } = useCart();
  const totalAmount = useCartTotalAmount();
  const totalItems = useCartTotalItems();
  return (
    <Container>
      <Helmet>
        <title>Panier</title>
      </Helmet>
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
      <p>
        Total : {totalItems} plats, pour un total de : {totalAmount}€
      </p>
    </Container>
  );
};

export default Cart;
