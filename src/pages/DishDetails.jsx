import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import dishesData from "../datas/dishes.json";
import "../assets/styles/dishdetails.css";
import { useCart } from "../utils/context/CartContext";
import { Helmet } from "react-helmet";
const DishDetails = () => {
  const { slug } = useParams();
  const [dish, setDish] = useState();
  const { addToCart } = useCart();

  useEffect(() => {
    const foundDish = dishesData.find((dish) => dish.slug === slug);
    setDish(foundDish);
  }, [slug]);

  if (!dish) {
    return <div>Plat introuvable</div>;
  }
  const handleAddToCart = () => {
    addToCart(dish);
  };
  return (
    <Container>
      <Helmet>
        <title>{dish.title}</title>
      </Helmet>
      <Row className="my-4">
        <Col className="my-4">
          <img src={dish.image} alt={dish.title} className="dishdetails" />
        </Col>
        <Col className="my-4">
          <h1>{dish.title}</h1>
          <p>{dish.description}</p>
          <p className="fw-bold">Prix : {dish.price}</p>
          <Button variant="primary" onClick={handleAddToCart}>
            Commander
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DishDetails;
