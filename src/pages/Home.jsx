import { Container, Row, Col, Button } from "react-bootstrap";
import Dish from "../components/Dish.jsx";
import { useState } from "react";

const Home = () => {
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showButton, setShowButton] = useState("Nouveautés uniquement");

  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
    setShowButton(
      !showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"
    );
  };
  const dishes = [
    {
      title: "Tacos à l'unité",
      price: "3€",
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      slug: "tacos-a-l-unite",
      new: true,
    },

    {
      title: "Enchiladas",
      price: "12€",
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      slug: "enchiladas",
      new: false,
    },

    {
      title: "Mole poblano",
      price: "15€",
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      slug: "mole-poblano",
      new: false,
    },
  ];

  const filteredDishes = showNewOnly
    ? dishes.filter((dish) => dish.new)
    : dishes;

  return (
    <Container>
      <Row className="d-flex justify-content-center my-5 ">
        <Button onClick={handleShowNewOnly} variant="success">
          {showButton}
        </Button>
        {filteredDishes.map((dish, index) => (
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
