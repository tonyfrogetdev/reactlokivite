import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dish from "./components/Dish";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <Dish
            title={"Tacos à l’unité"}
            price={"3€"}
            image={
              "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            }
          />
        </Col>
        <Col>
          <Dish
            title={"Enchiladas"}
            price={"12€"}
            image={
              "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
            }
          />
        </Col>
        <Col>
          <Dish
            title={"Mole poblano"}
            price={"15€"}
            image={
              "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
            }
          />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
