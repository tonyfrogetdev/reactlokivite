import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/styles/dish.css";

const Dish = ({ title, price, image, slug }) => {
  return (
    <NavLink to={`/plat/${slug}`} className="nav-link">
      <Card>
        <Card.Img className="dish" variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
};

export default Dish;
