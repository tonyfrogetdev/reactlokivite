import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/dish.css";

const Dish = ({ title, price, image, slug }) => {
  return (
    <Link to={`/plat/${slug}`} className="dish-link">
      <Card>
        <Card.Img className="dish" variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Dish;
