import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/dish.css";

const Dish = ({ title, price, image, slug, isNew }) => {
  return (
    <Link to={`/plat/${slug}`} className="nav-link">
      <Card>
        <Card.Img className="dish" variant="top" src={image} alt={title} />
        {isNew && (
          <Badge bg="primary" className="badge-new">
            Nouveau
          </Badge>
        )}

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Dish;
