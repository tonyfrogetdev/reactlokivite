import { Card } from "react-bootstrap";

const Dish = ({ title, price, image }) => {
  return (
    <Card>
      <Card.Img className="img-fluid" variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: {price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dish;
