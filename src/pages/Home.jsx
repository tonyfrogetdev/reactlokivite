import { Container, Row, Col, Button } from "react-bootstrap";
import Dish from "../components/Dish.jsx";
import { useEffect, useState } from "react";
import dishesData from "../datas/dishes.json";
import { Helmet } from "react-helmet";
const Home = () => {
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showButton, setShowButton] = useState("Nouveautés uniquement");
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const filteredDishes = showNewOnly
      ? dishesData.filter((dish) => dish.new)
      : dishesData;
    setDishes(filteredDishes);
  }, [showNewOnly]);

  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
    setShowButton(
      !showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"
    );
  };

  return (
    <Container>
      <Helmet>
        <title>Accueil</title>
      </Helmet>
      <Row className="d-flex justify-content-center my-5 ">
        <Button onClick={handleShowNewOnly} variant="success">
          {showButton}
        </Button>
        {dishes.map((dish, index) => (
          <Col md={4} key={index}>
            <Dish
              title={dish.title}
              price={dish.price}
              image={dish.image}
              slug={dish.slug}
              isNew={dish.new}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
