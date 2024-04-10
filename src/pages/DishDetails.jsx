import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import dishesData from "../datas/dishes.json";
import "../assets/styles/dishdetails.css";

const DishDetails = () => {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const foundDish = dishesData.find((dish) => dish.slug === slug);
    setDish(foundDish);
  }, [slug]);

  if (!dish) {
    return <div>Plat introuvable</div>;
  }

  return (
    <Container>
      <Row className="my-4">
        <Col className="my-4">
          <img src={dish.image} alt={dish.title} className="dishdetails" />
        </Col>
        <Col className="my-4">
          <h1>{dish.title}</h1>
          <p>{dish.description}</p>
          <p className="fw-bold">Prix : {dish.price}</p>
          <Button variant="primary">Commander</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DishDetails;
