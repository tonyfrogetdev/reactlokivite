import { Container, Table } from "react-bootstrap";
import { useCart } from "../Context/CartContext";
import { useCartTotalAmount } from "../Hooks/CartTotalAmount";
import { useCartTotalItems } from "../Hooks/CartTotalItems";

const Cart = () => {
  const { cartProducts } = useCart();
  const totalAmount = useCartTotalAmount();
  const totalItems = useCartTotalItems();
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
      <p>
        Total : {totalItems} plats, pour un total de : {totalAmount}€
      </p>
    </Container>
  );
};

export default Cart;
