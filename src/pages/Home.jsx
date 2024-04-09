import { Container, Row, Col } from "react-bootstrap";
import Dish from "../components/Dish.jsx";

const Home = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center my-5 ">
        <Col md={4}>
          <Dish
            title={"Tacos à l’unité"}
            price={"3€"}
            image={
              "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            }
            slug="tacos-a-l-unite"
          />
        </Col>
        <Col md={4}>
          <Dish
            title={"Enchiladas"}
            price={"12€"}
            image={
              "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
            }
            slug="enchiladas"
          />
        </Col>
        <Col md={4}>
          <Dish
            title={"Mole poblano"}
            price={"15€"}
            image={
              "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
            }
            slug="mole-poblano"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
